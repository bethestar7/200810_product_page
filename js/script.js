$(document).ready(function(){
    // 8/7
    
    //2차 배열 패턴 = ['이미지 파일', '타이틀', '콘텍스트', '가격 정보', '업데이트 날짜', '좋아요 횟수'];
    var $pd_arr = [
        ['img1.jpg', '거실 인테리어 4' , '합리주의 실용 인테리어 4', '30000', '20200802', '23'],
        ['img2.jpg', '거실 인테리어 1' , '합리주의 실용 인테리어 1', '150000', '20190202', '57'],
        ['img3.jpg', '침실 인테리어 8' , '모더니즘 실용 인테리어 8', '190000', '20171002', '49'],
        ['img4.jpg', '침실 인테리어 2' , '심플 실용 인테리어 2', '50000', '20200105', '17'],
        ['img5.jpg', '주방 인테리어 1' , '포스트 모더니즘 실용 인테리어 1', '90000', '20180509', '84'],
        ['img6.jpg', '침실 인테리어 5' , '합리주의 실용 인테리어 5', '20000', '20190629', '22'],
        ['img7.jpg', '서재 인테리어 8' , '아르데코 실용 인테리어 8', '80000', '20191216', '20'],
        ['img8.jpg', '욕실 인테리어 5' , '합리주의 실용 인테리어 5', '40000', '20200304', '36'],
        ['img1.jpg', '거실 인테리어 4' , '합리주의 실용 인테리어 4', '30000', '20200802', '23'],
        ['img2.jpg', '거실 인테리어 1' , '합리주의 실용 인테리어 1', '150000', '20190202', '57'],
        ['img3.jpg', '침실 인테리어 8' , '모더니즘 실용 인테리어 8', '190000', '20171002', '49'],
        ['img4.jpg', '침실 인테리어 2' , '심플 실용 인테리어 2', '50000', '20200105', '17'],
        ['img5.jpg', '주방 인테리어 1' , '포스트 모더니즘 실용 인테리어 1', '90000', '20180509', '84'],
        ['img6.jpg', '침실 인테리어 5' , '합리주의 실용 인테리어 5', '20000', '20190629', '22'],
        ['img7.jpg', '서재 인테리어 8' , '아르데코 실용 인테리어 8', '80000', '20191216', '20'],
        ['img8.jpg', '욕실 인테리어 5' , '합리주의 실용 인테리어 5', '40000', '20200304', '36']
        /* ['img9.jpg', '거실 인테리어 2' , '합리주의 실용 인테리어 2', '56000', '20191231', '42'] */
    ];

    var $pd_box = `
    <div class="pd_box">
        <div class="pd_photo">
            <img src="img/img1.jpg" alt="#">
        </div>
        <div class="pd_info">
            <h3 class="pd_title">title</h3>
            <p class="pd_text">context</p>
            <div class="pd_etc">
                <span class="pd_price">가격 정보</span>
                <span class="pd_date">업데이트 날짜</span>
            </div>
            <p class="fav">좋아요&nbsp; <span>100</span></p>
        </div>
    </div>
    `;

    var $btn_index; //button.active 적용하기 위한 전역 변수

    for(i=0; i<$pd_arr.length; i++){
        $('.pd_frame').append($pd_box);
    };

    function pd_sort(){
        $('.pd_box').each(function(index){
            $(this).find('.pd_photo img').attr('src','img/'+$pd_arr[index][0]);
            $(this).find('.pd_title').text($pd_arr[index][1]);
            $(this).find('.pd_text').text($pd_arr[index][2]);
            $(this).find('.pd_price').text($pd_arr[index][3]);
            $(this).find('.pd_date').text($pd_arr[index][4]);
            $(this).find('.fav span').text($pd_arr[index][5]);
        });
        $('.sort_button button').removeClass('active'); //함수 pd_sort에다가 button.active 적용. active 모두 제거
        $('.sort_button button').eq($btn_index).addClass('active'); //각 버튼 클릭했을때 이 함수를 넣고 btn_index를 지정해줌으로써 해당 eq에만 active 넣어서 버튼 색 바뀌게 함(클릭한 곳의 인덱스번호와 일치한 곳에 클래스 부여)

        $('.sort_sel option').prop('selected', false); //prop=> 선택했는지 안했는지를 true, false로// 함수 pd_sort에다가 option선택 적용. 모든 셀렉트 박스에서 옵션태그의 속성(prop)에서 선택(셀렉티드) 풀기
        $('.sort_sel option').eq($btn_index + 1).prop('selected', true); //각 버튼 클릭하면 해당 인덱스+1 해서 해당 옵션에만 셀렉트 값 부여
    }

    pd_sort(); //로딩 되자마자 함수문 호출 (sort 적용되지 않은 원래 배열대로)

    //'최신순' 버튼 클릭 시
    $('.date_sort').click(function(){

        //sort() => 순차적으로 나열하는 메서드
        $pd_arr.sort(function(a, b){
            //return a[4] - b[4]; //작은 순으로 차례대로 정렬(오름차순). 음수가 나오면 그대로. 양수가 나오면 a를 뒤로 보냄? 
            return b[4] - a[4]; //큰 순으로 차례대로 정렬함(내림차순) 이거하면 reverse안해도 됨
        });
        console.log($pd_arr);   //인덱스 4번의 배열 순서가 오름or내림차순으로 변경됨. 밑에 reverse()쓰면 얘도 순서 reverse로 바뀜

        //reverse() => 현재 배열을 역순으로 변경하는 메서드
        //$pd_arr.reverse(); 
        console.log($pd_arr); 

        $btn_index = $(this).index(); //번역변수였던 btn_index 값을 현재 클릭한 버튼의 인덱스(0)로 바꾸고
        console.log($btn_index);
        pd_sort(); // each문 담은 함수 호출

        /* $('.sort_button button').removeClass('active');
        $(this).addClass('active'); */
    });

    //'낮은 가격순' 클릭 시
    $('.low_sort').click(function(){
        $pd_arr.sort(function(a, b){
            return a[3] - b[3]; //오름차순 정렬
        });
        console.log($pd_arr);

        $btn_index = $(this).index();
        pd_sort();

        /* $('.sort_button button').removeClass('active');
        $(this).addClass('active'); 이 두 줄은 pd_sort()에 넣었음 */
    });

    //'높은 가격순' 클릭 시
    $('.high_sort').click(function(){
        $pd_arr.sort(function(a, b){
            return b[3] - a[3]; //오름차순 정렬
        });
        console.log($pd_arr);

        $btn_index = $(this).index();
        pd_sort();

        /* $('.sort_button button').removeClass('active');
        $(this).addClass('active'); 이 두 줄은 pd_sort()에 넣었음 */
    });

    //'인기순' 클릭 시
    $('.fav_sort').click(function(){
        $pd_arr.sort(function(a, b){
            return b[5] - a[5]; //오름차순 정렬
        });
        console.log($pd_arr);

        $btn_index = $(this).index();
        pd_sort();

        /* $('.sort_button button').removeClass('active');
        $(this).addClass('active'); 이 두 줄은 pd_sort()에 넣었음 */
    });

    //select box 선택 시
    $('.sort_sel').change(function(){
        var $sel_val = $(this).val();
        
        console.log($sel_val);
        if($sel_val == 'date'){
            $pd_arr.sort(function(a, b){
                return b[4] - a[4];
            });
            pd_sort();

        }else if($sel_val == 'low'){
            $pd_arr.sort(function(a, b){
                return a[3] - b[3];
            });
            pd_sort();

        }else if($sel_val == 'high'){
            $pd_arr.sort(function(a, b){
                return b[3] - a[3];
            });
            pd_sort();

        }else if($sel_val == 'fav'){
            $pd_arr.sort(function(a, b){
                return b[5] - a[5];
            });
            pd_sort();
        }
        $('.sort_button button').removeClass('active'); //셀렉트를 바꿔도 기존에 버튼 클릭한 것 때문에 액티브가 남아있을 수 있으니까 셀렉트박스에서 옵션을 바꿔서 눌렀을 때 모든 button에서 클래스명 액티브 제거(색 흰색으로 돌아오게)
        $('.sort_button button[class^="'+$sel_val+'"]').addClass('active'); //선택한 옵션의 밸류값을 sel_Val에 넣어서 똑같은 이름으로 시작하는 버튼에만 불 들어오게 ex)value = date => class = date_sort 로 연관짓는 것

        $('.sort_sel option').prop('selected', false); //셀렉트를 바꿔도 기존에 버튼 클릭한 것 때문에 옵션에 셀렉트가 남아있을 수 있으므로 모든 셀렉트박스에서 옵션 선택(selected)를 제거
        $('.sort_sel option[value="'+$sel_val+'"]').prop('selected', true); //선택한 옵션의 value와 일치하는 곳만 선택되게
    });


    //배열 데이터의 상품 개수가 총 8개(4의 배수)이고, 페이지 당 상품을 4개씩 보여줄 때) -> 페이지 2장 필요, 하단에 1,2라는 표시 장치가 필요
    // 8/4 => 몫은 2, 나머지는 0 => if
    // for문 => 초기값 k=0; k<8/4; k++
    // k=0, k=1 
    /*
    <ol class="pager">
        <li>0(k)+1</li> => <li>1</li>
        <li>1(k)+1</li> => <li>2</li>
    </ol>
    */

    //상품 개수가 총 9개라면 -> 필요한 페이지는 총 3장 (4개, 4개, 1개), 하단에 1,2,3 표시 장치 필요
    //if(9%4 != 0)  (9를 4로 나눈 나머지가 0이 아니라면)
    //for(k=0; k <= 8/4; k++)
    // k=0, k=1, k=2 
    /*
    <ol class="pager">
        <li>0(k)+1</li> => <li>1</li>
        <li>1(k)+1</li> => <li>2</li>
        <li>2(k)+1</li> => <li>3</li>
    </ol>
    */
   
    //pager (위치를 for문 이후에 해야 적용됨. pd_box들 생성을 해야 적용되니까)
    var $ea_item = 4; //각 페이지 별로 4개의 아이템을 보여주겠다는 선언
    if($pd_arr.length % $ea_item == 0){ //4의 배수라면   (만일 배열 데이터가 8개라면 나머지값은 0)
        for(k=0; k<$pd_arr.length/$ea_item; k++){ //  8/4 => 2,  고로 k가 2 보다 작은 0과 1, 두 번 돌게 됨
            $('.pager').append('<li>'+(k+1)+'</li>');
        }
    }else{ //4의 배수가 아니라면(나머지가 0이 아니라면)
        for(k=0; k<=$pd_arr.length/$ea_item; k++){ //parseInt(정수 반환)나 floor(소수점 내림) 쓰면 정수값만 가능
            $('.pager').append('<li>'+(k+1)+'</li>');
        }
    }
    $('.pager li').eq(0).addClass('active');
    //$('.pd_box').show();
    $('.pd_box').eq($ea_item - 1).nextAll().hide();

    $('.pager li').click(function(){
        var $pager_txt = $(this).text(); //인덱스 번호도 괜찮음
        $('.pd_box').show();
        $('.pd_box').eq($ea_item * ($pager_txt - 1)).prevAll().hide();
        $('.pd_box').eq($ea_item * $pager_txt - 1).nextAll().hide();

        $('.pager li').removeClass('active');
        $(this).addClass('active');
    });

    //pager 중 2번을 클릭했다면(text문구는 2), 인덱스 번호가 4~7인 것들만 보여준다. 4($ea_item) * (2-1) / 4($ea_item)*2 - 1
    // 4 * (2 - 1) => 4 (2번 페이지에서 보여야할 첫 인덱스 번호) => 보여주어야할 개수 * (클릭한 곳의 페이지 번호 - 1)
    // (4 * 2) - 1 => 7 (2번 페이지에서 보여야할 마지막 인덱스 번호)     
    
    //pager 중 3번을 클릭했다면(text문구는 3), 인덱스 번호가 8~11인 것들만 보여준다.
    // 4 * 2 => 8 (3번 페이지에서 보여야할 첫 인덱스 번호)
    // $ea_item * ($pager_txt - 1)




});