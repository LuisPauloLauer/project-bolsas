$(function () {

  'use strict';

  var console = window.console || { log: function () {} };
  var $body = $('body');


  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  $.fn.tooltip.noConflict();
  $body.tooltip();


  // Demo
  // ---------------------------------------------------------------------------

  (function () {
    var $image = $('.img-container > img');
    var $actions = $('.docs-actions');
    var $download = $('#download');
    var $dataX = $('#dataX');
    var $dataY = $('#dataY');
    var $dataHeight = $('#dataHeight');
    var $dataWidth = $('#dataWidth');
    var $dataRotate = $('#dataRotate');
    var $dataScaleX = $('#dataScaleX');
    var $dataScaleY = $('#dataScaleY');
    var options = {
          aspectRatio: 0,
          crop: function (e) {
            $dataX.val(Math.round(e.x));
            $dataY.val(Math.round(e.y));
            $dataHeight.val(Math.round(e.height));
            $dataWidth.val(Math.round(e.width));
            $dataRotate.val(e.rotate);
            $dataScaleX.val(e.scaleX);
            $dataScaleY.val(e.scaleY);
          }
        };

	$('[data-toggle="tooltip"]').tooltip();
	
    $image.on({
      'build.cropper': function (e) {
        console.log(e.type);
      },
      'built.cropper': function (e) {
        console.log(e.type);
      },
      'cropstart.cropper': function (e) {
        console.log(e.type, e.action);
      },
      'cropmove.cropper': function (e) {
        console.log(e.type, e.action);
      },
      'cropend.cropper': function (e) {
        console.log(e.type, e.action);
      },
      'crop.cropper': function (e) {
        console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
      },
      'zoom.cropper': function (e) {
        console.log(e.type, e.ratio);
      }
    }).cropper(options);


    // Buttons
    if (!$.isFunction(document.createElement('canvas').getContext)) {
      $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
    }

    if (typeof document.createElement('cropper').style.transition === 'undefined') {
      $('button[data-method="rotate"]').prop('disabled', true);
      $('button[data-method="scale"]').prop('disabled', true);
    }


    // Download
  // Options
  $('.docs-toggles').on('change', 'input', function () {
    var $this = $(this);
    var name = $this.attr('name');
    var type = $this.prop('type');
    var cropBoxData;
    var canvasData;

    if (!$image.data('cropper')) {
      return;
    }

    if (type === 'checkbox') {
      options[name] = $this.prop('checked');
      cropBoxData = $image.cropper('getCropBoxData');
      canvasData = $image.cropper('getCanvasData');

      options.built = function () {
        $image.cropper('setCropBoxData', cropBoxData);
        $image.cropper('setCanvasData', canvasData);
      };
    } else if (type === 'radio') {
      options[name] = $this.val();
    }

    $image.cropper('destroy').cropper(options);
  });
	
    // Methods
    $actions.on('click', '[data-method]', function () {
      var $this = $(this);
      var data = $this.data();
      var $target;
      var result;

      if ($this.prop('disabled') || $this.hasClass('disabled')) {
        return;
      }

      if ($image.data('cropper') && data.method) {
        data = $.extend({}, data); // Clone a new one

        if (typeof data.target !== 'undefined') {
          $target = $(data.target);

          if (typeof data.option === 'undefined') {
            try {
              data.option = JSON.parse($target.val());
            } catch (e) {
              console.log(e.message);
            }
          }
        }

        result = $image.cropper(data.method, data.option, data.secondOption);

       
		
		
		switch (data.method) {
          case 'getCroppedCanvas':
            if (result) {
				
				//var material = new THREE.MeshPhongMaterial({map:texture,emissive:"#060606",side:THREE.DoubleSide})
				//var material2 = createFusionMaterial(selection[6],"",texture,"");
				//ChangeTexture(selection[1],material);
				
				//$.post('libCrop/crop.php',{data: result.toDataURL()},function(resultData){$('#cropResult').val(resultData)})
				$.post( "libCrop/crop.php", { data: result.toDataURL("image/png"),parte:selection[1],borsa:selection[0]})
  					.done(function( a ) {
						var texture = new THREE.Texture();
						texture.image = result;
						texture.needsUpdate = true;
						var material = new THREE.MeshLambertMaterial({map:texture,emissive:"#060606",side:THREE.DoubleSide});
						selection[7] = a;
						console.log(selection[7]);
						ChangeTexture(selection[1],CreateTextureMaterial(a));
						aggiornaPrezzo(selection[1], selection[4], selection[7]);
						//var sessionimage = "texture/"+selection[11]+"/"+selection[7];
    					//ChangeTexture(selection[1],createFusionMaterial("texture/2.jpg","",sessionimage,""));
  				});
				
// Bootstrap's Modal
            }

            break;
        }

        if ($.isPlainObject(result) && $target) {
          try {
            $target.val(JSON.stringify(result));
          } catch (e) {
            console.log(e.message);
          }
        }

      }
    });


    // Keyboard
    $body.on('keydown', function (e) {

      if (!$image.data('cropper') || this.scrollTop > 300) {
        return;
      }

      switch (e.which) {
        case 37:
          e.preventDefault();
          $image.cropper('move', -1, 0);
          break;

        case 38:
          e.preventDefault();
          $image.cropper('move', 0, -1);
          break;

        case 39:
          e.preventDefault();
          $image.cropper('move', 1, 0);
          break;

        case 40:
          e.preventDefault();
          $image.cropper('move', 0, 1);
          break;
      }

    });


    // Import image
    var $inputImage = $('#inputImage');
    var URL = window.URL || window.webkitURL;
    var blobURL;

    if (URL) {
      $inputImage.change(function () {
        var files = this.files;
        var file;

        if (!$image.data('cropper')) {
          return;
        }

        if (files && files.length) {
          file = files[0];

          if (/^image\/\w+$/.test(file.type)) {
            blobURL = URL.createObjectURL(file);
            $image.one('built.cropper', function () {
              URL.revokeObjectURL(blobURL); // Revoke when load complete
            }).cropper('reset').cropper('replace', blobURL);
            $inputImage.val('');
          } else {
            $body.tooltip('Please choose an image file.', 'warning');
          }
        }
      });
    } else {
      $inputImage.prop('disabled', true).parent().addClass('disabled');
    }

  }());

});
