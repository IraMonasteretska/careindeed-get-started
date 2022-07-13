
$(function () {



    // --- check form disabled-anabled button ------ //

    $('.modal__form .inputfield input' || '.modal__form .inputfield input').bind('input', function () {
        $.fn.isValid = function () {
            return this[0].checkValidity();
        };

        if ($('.firstname').val().length > 0 && $('.firstname').isValid() == true && $('.lastname').val().length > 0 && $('.lastname').isValid() == true && $('.tel').val().length > 0 && $('.tel').isValid() == true && $('.email').val().length > 0 && $('.email').isValid() == true) {
            // $('.form__btn .modal__btn').prop('disabled', false);
            $('.form__btn .modal__btn').removeClass('disabled');

        } else {
            // $('.form__btn .modal__btn').prop('disabled', true);
            $('.form__btn .modal__btn').addClass('disabled');
        }
    });


    // ------- INPUT LABELS - small ------- //
    var formFields = $('.inputfield');

    formFields.each(function () {
        let field = $(this);
        let input = field.find('.textfield');
        let label = field.find('label');

        function checkInput() {
            let valueLength = input.val().length;

            if (valueLength > 0) {
                label.addClass('freeze');
            } else {
                label.removeClass('freeze');
            }
        }

        input.change(function () {
            checkInput();
        });
    });


    // ------- show/hide step ------- //

    $('.modal__step, .btn__back').on('click', function () {
        let target = $(this).attr('data-target');
        $('.modal__window').removeClass('show__window').hide();
        $('.' + target).addClass('show__window').fadeIn();
        return false;
    });

    //   ------ radiobuttons check ------ //

    $('.radiobuttons input').on('click', function () {
        let radioinput = $('.radiobuttons').find('input');
        if ($(radioinput).is(':checked')) {
            $('.radio__btn').prop('disabled', false);
        } else {
            $('.radio__btn').prop('disabled', true);
        }
    });

    // close btn //
    
    $('.btn-close').on('click', function () {
        $('.modal__window').removeClass('show__window').hide();
        $('.firstwindow').addClass('show__window').fadeIn();
        return false;
    });



});