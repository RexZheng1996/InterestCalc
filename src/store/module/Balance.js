const state = ({      //state里面存放的是变量，如果你要注册全局变量，写这里
    LXInfo:{
      isNatural: true,
      isContractStart: true,
      contractStartTime:'2020-1-1',
      prosecutionTime: '',
      acceptanceTime:'',
      isLiquidatedDamage:true,
      liquidatedDamage:0,
    },
    LXAction:[//借还款记录
        {
          // index: 0,//与records中的索引保持一致[待定：尽量删除]
          isFolded: false,//面板折叠状态
          LXLoan:{ //借款记录
            loanLendTime:'',//出借时间
            loanEndTime:'',//借款到期时间
            rateStartTime:'',//期内利息起算时间
            balanceTime:'',//结算时间
            loanAmount:0,//借款金额
          
            // 期内利息
            rateRadio: 1, // 选择有无期内利息
            rateSelectValue: 1, // 期内利率种类 值 1，2，3
            stableRateInputShow: true,
            oneYearLPRItemShow: false,
            fiveYearLPRItemShow: false,
            rate:0,//期内利率
            LPRTimes:0,//LPR倍率
            LPRdate:'',//期内利率约定的LPR年份
          
            // 逾期利息
            overdueRateRadio: 1, // 选择有无余期利息
            overdueRateSelectValue: 1, // 逾期利率种类 值 1，2，3
            overdueStableRateInputShow: true,
            overdueOneYearLPRItemShow: false,
            overdueFiveYearLPRItemShow: false,
            overdueRate:0,//逾期利率
            overdueTimes:0,//逾期LPR倍率
            overdueLPRdate:'',//逾期利率约定的LPR年份

            //还款记录,可能存在多个
            LXRepayment:[
              {
                isFolded: true, //本记录折叠状态
                repayPrincipalRadio: 1,//是否优先赔偿本金
                repayTime: '',//还款时间
                rateTimeRange: [],//期内利息起算和终止时间
                overdueTimeRange:[],//逾期利息起算和终止时间
                repayPrincipal:0,//偿还本金金额
                repayRate:0,//偿还利息金额
                repayTotal:0,//偿还总金额
              }
            ],
          },
          LXBalance:{}
        }
      ],
  });
  
  const getters = {                //getters相当于是state的计算属性，如果你需要将变量的值进行计算，然后输出，写这里

  };
  
  const mutations = {       //修改store中的变量的方法，如果你要改变变量的值，就写这里

  };
  
  const actions = {            //actions提交的是mutations，相当于就是改变变量的方法的重写，但是，actions是可以进行异步操作的

  };
  
  export default{
    state,
    getters,
    mutations,
    actions
  };