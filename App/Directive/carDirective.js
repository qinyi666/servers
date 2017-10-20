/**
 * Created by 橘子到底酸不酸 on 2017/10/19.
 */
app.directive("car",function(){
    return {
        restrict:"EA",
        templateUrl:"App/Views/temp/car.html",
        controller:function($scope){

        },
        link:function(scope,ele,attr,controller){
            var mySwiper=new Swiper('.banner',{
                //direction:'vertical',
                loop: true,
                autoplay:500
            })
            var mySwiper1=new Swiper('.lun',{
                //direction:'vertical',
                loop: true,
                autoplay:500
            })
            //
            var pullDownEle=document.getElementById('pullDown');
            var pullUpEle=document.getElementById('pullUp');
            var offsetHeight=pullDownEle.offsetHeight;
            var str='';

            function pullDownAction(){
                myScroll.refresh();
            }

            function pullUpAction(){
                $.ajax({
                    url:'./Data/car.json',
                    type:'get',
                    success: function (result) {
                        var str = '<dl>';
                        for (var i = 0; i < result.length; i++) {
                            str += '<dt><img src="'+result[i].src+'" alt=""></dt><dd ><h3>' + result[i].names + '</h3><h4>' + result[i].con + '</h4><p><b>' + result[i].money + '</b><em>' + result[i].del + '</em></p></dd>'
                            str += '</dl>';

                            $('.dls').append(str);
                            myScroll.refresh();
                        }
                    }
                });
            }

            var myScroll=new iScroll("wrapper",{
                topOffset: offsetHeight,
                onScrollMove: function () {
                    if(this.y>5&&!pullDownEle.className.match('flip')){
                        pullDownEle.className='flip';
                        pullDownEle.querySelector('span').innerHTML="正在加载";
                    }
                    if(this.y<this.maxScrollY&&!pullDownEle.className.match('flip')){
                        pullUpEle.className='flip';
                        pullUpEle.querySelector('span').innerHTML='正在加载';
                    }
                },
                onScrollEnd: function () {
                    if(pullDownEle.className.match('flip')){
                        pullDownEle.className='loading';
                        pullDownAction();
                    }
                    if(pullUpEle.className.match('flip')){
                        pullUpEle.className='loading';
                        pullUpAction();
                    }
                },
                onRefresh: function () {
                    if(pullDownEle.className.match('loading')){
                        pullDownEle.className='';
                        pullDownEle.querySelector('span').innerHTML='下拉刷新';
                    }
                    if(pullUpEle.className.match('loading')){
                        pullUpEle.className='';
                        pullUpEle.querySelector('span').innerHTML="加载更多";
                    }
                }
            });

        }
    }
})