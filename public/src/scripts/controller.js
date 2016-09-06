angular.module('starter.controllers', ['ionic'])
    .controller('pickCtrl', ['$scope', '$ionicSlideBoxDelegate','util', function ( $scope,$ionicSlideBoxDelegate,util) {                 //选球控制器
        $scope.currentMethod = configData.defaultMethod;              //当前方法 xuanwu.renxuanwuzhongwu.fushi 
        $scope.currentMethodTitle = phoenix.Games.N115.Config.pros.getTitleByName( $scope.currentMethod).join('');      //获取默认标题
        $scope.poptypeshow = false;         //标题箭头方向
        $scope.menuShow = false;            //右侧菜单是否显示
        $scope.historyShow = false;         //显示历史记录
        $scope.awardGroupRetStatus = configData.awardGroupRetStatus;    //奖金返点
        $scope.gameMethodsGroup = configData.gameMethods;    //玩法组
        $scope.choosedType = 4;             //默认类型
        $scope.singleMode = false;        //是否是单式
        $scope.modes = ['xuanwu.renxuanwuzhongwu.fushi'];

        // $scope.bt = {
        //   h3:'选区一',
        //   quick:{b:'大',x:'小',q:'全',d:'单',s:'双',c:'清'},
        //   balls:[
        //       { 'content' : '01',     'active' : false },
        //       { 'content' : '02',     'active' : false },
        //       { 'content' : '03',     'active' : false },
        //       { 'content' : '04',     'active' : false },
        //       { 'content' : '05',     'active' : false },
        //       { 'content' : '06',     'active' : false },
        //       { 'content' : '07',     'active' : false },
        //       { 'content' : '08',     'active' : false },
        //       { 'content' : '09',     'active' : false },
        //       { 'content' : '10',     'active' : false },
        //       { 'content' : '11',     'active' : false },
        //       { 'content' : '5单0双', 'active' : false },
        //       { 'content' : '4单1双', 'active' : false },
        //       { 'content' : '3单2双', 'active' : false },
        //       { 'content' : '1单3双', 'active' : false },
        //       { 'content' : '1单3双', 'active' : false },
        //       { 'content' : '0单5双', 'active' : false }
        //     ],
        //   start:0,
        //   end:11
        // };

        $scope.ballTrees = [{
          h3:'选区一',
          quick:[
            { 'content' : '大', 'active' : false },
            { 'content' : '小', 'active' : false },
            { 'content' : '全', 'active' : false },
            { 'content' : '单', 'active' : false },
            { 'content' : '双', 'active' : false },
            { 'content' : '清', 'active' : false }
          ],
          balls:[
              { 'content' : '01',     'active' : false },
              { 'content' : '02',     'active' : false },
              { 'content' : '03',     'active' : false },
              { 'content' : '04',     'active' : false },
              { 'content' : '05',     'active' : false },
              { 'content' : '06',     'active' : false },
              { 'content' : '07',     'active' : false },
              { 'content' : '08',     'active' : false },
              { 'content' : '09',     'active' : false },
              { 'content' : '10',     'active' : false },
              { 'content' : '11',     'active' : false },
              { 'content' : '5单0双', 'active' : false },
              { 'content' : '4单1双', 'active' : false },
              { 'content' : '3单2双', 'active' : false },
              { 'content' : '1单3双', 'active' : false },
              { 'content' : '1单3双', 'active' : false },
              { 'content' : '0单5双', 'active' : false }
            ],
          start:0,
          end:11
        },{
          h3:'选区二',
          quick:[
            { 'content' : '大', 'active' : false },
            { 'content' : '小', 'active' : false },
            { 'content' : '全', 'active' : false },
            { 'content' : '单', 'active' : false },
            { 'content' : '双', 'active' : false },
            { 'content' : '清', 'active' : false }
          ],
          balls:[
              { 'content' : '01',     'active' : false },
              { 'content' : '02',     'active' : false },
              { 'content' : '03',     'active' : false },
              { 'content' : '04',     'active' : false },
              { 'content' : '05',     'active' : false },
              { 'content' : '06',     'active' : false },
              { 'content' : '07',     'active' : false },
              { 'content' : '08',     'active' : false },
              { 'content' : '09',     'active' : false },
              { 'content' : '10',     'active' : false },
              { 'content' : '11',     'active' : false },
              { 'content' : '5单0双', 'active' : false },
              { 'content' : '4单1双', 'active' : false },
              { 'content' : '3单2双', 'active' : false },
              { 'content' : '1单3双', 'active' : false },
              { 'content' : '1单3双', 'active' : false },
              { 'content' : '0单5双', 'active' : false }
            ],
          start:0,
          end:11
        },{
          h3:'选区三',
         quick:[
            { 'content' : '大', 'active' : false },
            { 'content' : '小', 'active' : false },
            { 'content' : '全', 'active' : false },
            { 'content' : '单', 'active' : false },
            { 'content' : '双', 'active' : false },
            { 'content' : '清', 'active' : false }
          ],
          balls:[
              { 'content' : '01',     'active' : false },
              { 'content' : '02',     'active' : false },
              { 'content' : '03',     'active' : false },
              { 'content' : '04',     'active' : false },
              { 'content' : '05',     'active' : false },
              { 'content' : '06',     'active' : false },
              { 'content' : '07',     'active' : false },
              { 'content' : '08',     'active' : false },
              { 'content' : '09',     'active' : false },
              { 'content' : '10',     'active' : false },
              { 'content' : '11',     'active' : false },
              { 'content' : '5单0双', 'active' : false },
              { 'content' : '4单1双', 'active' : false },
              { 'content' : '3单2双', 'active' : false },
              { 'content' : '1单3双', 'active' : false },
              { 'content' : '1单3双', 'active' : false },
              { 'content' : '0单5双', 'active' : false }
            ],
          start:0,
          end:11
        }
        ];

        $scope.results = [];

        //返回
        $scope.goBack = function(evt){                                          
          console.log('back');
        }

       //玩法栏显示与隐藏
       $scope.changeMethod = function(evt){                                     
         $scope.poptypeshow = !$scope.poptypeshow;
       }
       //右侧小导航显示与隐藏
       $scope.menuShowHander = function(evt){                                
        $scope.menuShow = !$scope.menuShow;
      }
       //显示最近10条开奖记录
       $scope.showRecord10 = function(evt){
         $scope.historyShow = !$scope.historyShow;
       }
       //机选
       $scope.getRandom = function(evt){
        console.log('机选');
      }

       //游戏类型切换
       $scope.slideChange = function(i,gameMethods){ 
        $scope.choosedType = i;
        $ionicSlideBoxDelegate.slide(i);
      }

       //具体游戏切换
       $scope.chooseGame = function(j,_gameType,evt){
        $scope.singleMode = false;
        angular.element('.typeSpans').removeClass('active');
        angular.element(evt.target).addClass('active');
        $scope.currentMethod = _gameType.mode+'.'+_gameType.parent+'.'+_gameType.name;
          if(/fushi$/.test(_gameType.name)){                    //复式
               //$scope.ballTree.start = 0;
              //$scope.ballTree.end = 11;

              util.setArr($scope.ballTrees,0,11);
            if(_gameType.parent == 'dingweidan' || _gameType.parent == 'qiansanzhixuan' ){
              $scope.modes = [_gameType.mode,_gameType.parent,_gameType.name];
            }else if(_gameType.parent == 'qianerzhixuan'){
              $scope.modes = [_gameType.mode,_gameType.parent];
            }else{
              $scope.modes = [$scope.currentMethod];
            }
          }else if(/danshi$/.test(_gameType.name)){             //单式
            $scope.singleMode = true;
          }else if(/dantuo$/.test(_gameType.name)){             //胆拖
             $scope.modes = [_gameType.mode,_gameType.parent];
          }else if(_gameType.name == 'dingdanshuang'){          //定单双
             //$scope.ballTree.start = 11;
             //$scope.ballTree.end = 17;
             util.setArr($scope.ballTrees,11,17);
             $scope.modes = [$scope.currentMethod];
          }else if(_gameType.name == 'caizhongwei'){            //猜中位
             $scope.modes = [$scope.currentMethod];
             //$scope.ballTree.start = 2;
             //$scope.ballTree.end = 9;
             util.setArr($scope.ballTrees,2,9);
          }
          $scope.currentMethodTitle = phoenix.Games.N115.Config.pros.getTitleByName($scope.currentMethod).join('');
          $scope.poptypeshow = false;
        }

        //滑动
        $scope.slideHasChanged =function($index){
         $scope.choosedType = $index;
       }

       //点球
       $scope.result = function(ball){

          ball.active = !ball.active;
          console.log(ball);
       }

      $scope.quick = function(ballTree,q){
        for(var i = ballTree.start; i<ballTree.end; i++){
          if(q.content == '双'){
            if((i+1) % 2 == 0){
              ballTree.balls[i].active = true;
            }
          }else if(q.content == '单'){
            if(i % 2 == 0){
              ballTree.balls[i].active = true;
            }  
          }
        }
        q.active = true;
      }

     }]).factory('util',function(){  
      return{
        setArr:function(arr,start,end){
          for(var i = 0; i<arr.length;i++){
            arr[i].start = start;
            arr[i].end = end;
          }
        }
      }
    })
     .controller('drawCtrl', ['$scope', function ($scope) {


     }])
     .controller('submitCtrl',  ['$scope', function ($scope) {


     }])
     .controller('bodyCtrl', ['$scope', function ($scope) {


     }]);



