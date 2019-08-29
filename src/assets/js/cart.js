
$(function () {

    $plus = $('.plus');
    $reduce = $('.reduce');
    $all_sum = $('.sum');
//  商品数量+1
    $plus.click(function () {
        let $this = $(this);
        let data = {
            cartId: $this.parent().attr('cart_id'),
            number: $this.val()
        };
        // 获取点击的+按钮

        $.get(UPDARENUM_URL, data, function (results) {
            if (results != null && results.status === 200) {
                if (results.data === 1) {
                    let $inputVal = $this.prev('input'),
                        $count = parseInt($inputVal.val()) + 1,
                        $obj = $this.parents('.amount_box').find('.reduce'),
                        $priceTotalObj = $this.parents('.order_lists').find('.sum_price'),
                        $price = $this.parents('.order_lists').find('.price').html(),  //单价
                        $priceTotal = $count * parseInt($price.substring(1));
                    $inputVal.val($count);
                    $priceTotalObj.html('￥' + $priceTotal);
                    if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
                        $obj.removeClass('reSty');
                    }
                    totalMoney();
                }
            }
        }, 'json');
    });
//    商品数量-1
    $reduce.click(function () {
        // 获取点击的-按钮
        let $this = $(this);
        let data = {
            cartId: $this.parent().attr('shop_id'),
            op: 2,
        };

        $.get(update_url, data, function (results) {
            if (results != null && results.status === 200) {
                if (results.data === 1) {
                    let $inputVal = $this.next('input'),

                        $count = parseInt($inputVal.val()) - 1,

                        $priceTotalObj = $this.parents('.order_lists').find('.sum_price'),

                        $price = $this.parents('.order_lists').find('.price').html(),
                        $priceTotal = $count * parseInt($price.substring(1));
                    if ($inputVal.val() > 1) {
                        $inputVal.val($count);
                        $priceTotalObj.html('￥' + $priceTotal);
                    }
                    if ($inputVal.val() === 1 && !$this.hasClass('reSty')) {
                        $(this).addClass('reSty');
                    }
                    totalMoney();
                }
            }
        }, 'json');

    });

    $all_sum.keyup(function () {
        let $count = 0,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),  //单价
            $priceTotal = 0;
        if ($(this).val() === '') {
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g, ''));
        $count = $(this).val();
        $priceTotal = $count * parseInt($price.substring(1));
        $(this).attr('value', $count);
        $priceTotalObj.html('￥' + $priceTotal);
        totalMoney();
    });

    function totalMoney() {
        let total_money = 0;
        let total_count = 0;
        let calBtn = $('.calBtn a');
        $sonCheckBox.each(function () {
            if ($(this).is(':checked')) {
                //  商品价格
                let goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
                //  商品的数量
                let num = parseInt($(this).parents('.order_lists').find('.sum').val());
                total_money += goods;
                total_count += num;
            }
        });
        $('.total_text').html('￥' + total_money);
        $('.piece_num').html(total_count);

        // console.log(total_money,total_count);

        if (total_money !== 0 && total_count !== 0) {
            if (!calBtn.hasClass('btn_sty')) {
                calBtn.addClass('btn_sty');
            }
        } else {
            if (calBtn.hasClass('btn_sty')) {
                calBtn.removeClass('btn_sty');
            }
        }
    }
});
