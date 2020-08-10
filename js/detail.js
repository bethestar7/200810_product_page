$(document).ready(function(){
    // 8/10
    // 가격 계산하기

    var $price = $('.pd_price span').text();     //현재 가격 정보 저장
    console.log('현재 가격의 원본 정보: ' + $price);
    console.log('현재 가격의 원본 정보의 데이터 타입: ' + typeof $price); //string

    var $origin_price = $price.replace(',', ''); //쉼표를 제거한 원본 가격(숫자만) 저장
    console.log('숫자 정보의 값: ' + $origin_price);
    console.log('숫자 정보의 데이터 타입: ' + typeof $origin_price);      //string

    var $basic_price = parseFloat($origin_price); //parseFloat()=>문자열을 수로 바꾸는 함수

    //var $total_price;
    var $total_price_opt;
    var $total_price_result = '';
    var $opt_val = '';
    var $num = $('.pd_count_box input').val();

    function calc_price(){
        $('.pd_count_box input').val($num);

        /*
        $total_price = $basic_price * $num;
        
        //#3. 수를 다시 스트링으로 바꾸고 , 넣기 (하단에 설명 있음)
        var $total_result = $total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        console.log($total_result);

        $('.total_price_num span').text($total_result); //span에 넣기
        */

        //#4. 옵션값도 적용하기
        $opt_val = $('.pd_option select').val(); //0, 10000, 5000
        console.log($opt_val);
        console.log(typeof $opt_val); //string

        //$total_price = $basic_price * $num;

        $total_price_opt = $basic_price * $num + parseFloat($opt_val); //문자열을 숫자로 바꾸고
        $total_price_result = $total_price_opt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            //다시 문자열로 바꾸면서 쉼표 적용
        console.log($total_price_result);

        $('.total_price_num span').text($total_price_result); //span에 넣기

        //#5. 장바구니
        var $detail_img = $('.pd_img img').attr('src');
        $('.cart_img img').attr('src', $detail_img);
        var $detail_title = $('.pd_title h3').text();
        $('.cart_info h4').text($detail_title);
        $('.buy_price span').text($total_price_result);

        var $sel_opt_txt = $('.pd_option select option:selected').text();
        $('.bottom_list p span').text($sel_opt_txt);

        var $opt_default = $('.pd_option select option:selected').attr('value');
        if($opt_default == 0){
            $('.bottom_list').hide();
        }else{
            $('.bottom_list').show();
        }
    };
    
    
    //#1. .pd_count_box a:first와 .pd_count_box a:last 클릭 시, 수량 변화
    $('.pd_count_box a:first').click(function(){
        if($num < 2){ //현재 구매 수량이 1인 경우, 작동 금지
            
        }else{        //현재 구매 수량이 2 이상인 경우, 1씩 감소. 
            $num--;   //10->9->8...->1

            /* 이건 function calc_price에 넣을 거임
            $('.pd_count_box input').val($num);

            //#2. 수량변화와 더불어 총 금액 변화
            $total_price = $basic_price * $num;
            $('.total_price_num span').text($total_price);
            */

            calc_price();

        }
        return false;
    });
    $('.pd_count_box a:last').click(function(){
        $num++;

        /* 이건 function calc_price에 넣을 거임
        $('.pd_count_box input').val($num);

        //#2. 수량변화와 더불어 총 금액 변화
        $total_price = $basic_price * $num;
        $('.total_price_num span').text($total_price);
        */

        calc_price();
        
        return false;
    });

    //#4. 옵션값도 적용하기
    $('.pd_option select').change(function(){
        /*
        var $opt_val = $(this).val();
        console.log(typeof $opt_val); //string
        */

        calc_price();
    });


    //#5. 장바구니
    $('.pd_btn li:last-child input').click(function(){
        $('.mycart').addClass('active');
        $('.dark').addClass('active');

        /* calc_price함수 안으로 보냄
        var $detail_img = $('.pd_img img').attr('src');
        $('.cart_img img').attr('src', $detail_img);
        var $detail_title = $('.pd_title h3').text();
        $('.cart_info h4').text($detail_title);
        $('.buy_price span').text($total_price_result);

        var $sel_opt_txt = $('.pd_option select option:selected').text();
        $('.bottom_list p span').text($sel_opt_txt);

        var $opt_default = $('.pd_option select option:selected').attr('value');
        if($opt_default == 0){
            $('.bottom_list').hide();
        }else{
            $('.bottom_list').show();
        }
        */
        calc_price();
    });

    $('.dark, .close_btn ,.cart_btn li:last-child input').click(function(){
        $('.mycart').removeClass('active');
        $('.dark').removeClass('active');
    });

});


// 정규식 표현  /\B(?=(\d{3})+(?!\d))/g
//#1. / ~ / => 정규식 표현의 시작과 끝
//#2. \B    => 공백 처리(Blank)
//#3. ?=    => 내부의 정규식 실행문을 조합하여 결과로 도출
//#4. \d    => (dimension) 0 ~ 9까지의 숫자 데이터만을 지정
//#5. \d{3} => 좌측부터 세자리마다 패턴 구성
//#6. ?!\d  => 숫자 데이터만 지정.  !때문에 숫자를 셀 때 역순으로 개수를 센다. 부정형 전방 탐색(역방향으로 셈)
//#7. g     => Global 정규 표현을 사용하겠다는 의미

//ex (실수의 우측으로부터 첫번째 자리 숫자가 총 10개라면 10의 자리 순서까지 지정)
//ex 1000000000 => 100 000 000 0(좌측부터 3자리마다 공백) => 1 000 000 000(역순으로) => 1,000,000,000(쉼표추가)

