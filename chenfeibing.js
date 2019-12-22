var myChart2 = echarts.init(document.getElementById("myChart2"))
option = {
    color: ['#5a5250', '#3b5255', '#5f737a', '#7a8c8c', '#acb6ae', '#c0c0b4', '#d7d5c9', '#d7e9bf'],
    title: {
        text: '图表三 Open Law案例八类案由占比',
        subtext: '数据来源：Open Law',
        x: 'center',
        y: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: true,
    series: [{
        name: '面积模式',
        type: 'pie',
        radius: [30, 110],
        //center : ['75%', '50%'],
        roseType: 'area',
        data: [
            { value: 623, name: '劳动、人事争议 73.99%' },
            { value: 77, name: '行政主体 9.14%' },
            { value: 42, name: '人格权纠纷 4.99%' },
            { value: 40, name: '历史案由 4.75%' },
            { value: 18, name: '婚姻家庭、继承纠纷 2.14%' },
            { value: 18, name: '行政行为 2.14%' },
            { value: 12, name: '合同、无因管理 1.43%' },
            { value: 12, name: '其他 1.42%' }
        ]
    }]
};
myChart2.setOption(option)

var myChart4 = echarts.init(document.getElementById("myChart4"))
option = {
    color: ['#7a8c8c'],
    title: {
        text: '图表五 职业病鉴定流程',
        subtext: '数据来源：openlaw',
        x: 'center',
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: function(params) {
            var s = '';
            s += params.name + ':' + '\n' + '\n';
            var values = params.value.toString().split(",");
            s += values['0'] + '\n';
            //系列名称:seriesName: string  数据名，类目名 : name: string   传入的数据值:value: number|Array
            return s;
        },
        extraCssText: 'width:200px; white-space:pre-wrap'
    },

    //tooltip : { 
    //    trigger: 'item',
    //   interval: 0,
    //   formatter: "{b} :<br/> {c} "
    //},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 150,
        roam: true,
        label: {
            normal: {
                show: true,
                fontSize: 28
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 20],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 200
                }
            }
        },

        data: [{
            name: '提出申请',
            value: '当事人向作出诊断的医疗卫生机构所在地政府卫生行政部门提出鉴定申请。鉴定申请需提供的材料包括：鉴定申请书，职业病诊断病历记录，诊断证明书，鉴定委员会要求提供的其他材料。',
            x: 300,
            y: 300
        }, {
            name: '审核',
            value: '职业病诊断鉴定办事机构收到当事人的鉴定申请后，要对其提供的与鉴定有关的资料进行审核，看有关材料是否齐备、有效。职业病诊断鉴定办事机构应当自收到申请资料之日起10日内完成材料审核，对材料齐全的发给受理通知书；对材料不全的，通知当事人进行补充。必要时由第三方对患者进行体检或提取相关现场证据。当事人应当按照鉴定委员会的要求，予以配合。',
            x: 500,
            y: 300
        }, {
            name: '组织鉴定',
            value: '参加职业病诊断鉴定的专家，由申请鉴定的当事人在职业病诊断鉴定办事机构的主持下，从专家库中以随机抽取的方式确定，当事人也可以委托职业病诊断鉴定办事机构抽取专家，组成职业病鉴定委员会，鉴定委员会通过审阅鉴定资料，综合分析，作出鉴定结论。鉴定意见不一致时，应当予以注明。',
            x: 700,
            y: 300
        }, {
            name: '出具鉴定书',
            value: '鉴定书的内容应当包括：被鉴定人的职业接触史；作业场所监测数据和有关检查资料等一般情况；当事人对职业病诊断的主要争议以及鉴定结论和鉴定时间。鉴定书必须由所有参加鉴定的成员共同签署，并加盖鉴定委员会公章。',
            x: 900,
            y: 300
        }],
        // links: [],
        links: [{
            //source: 0,
            //target: 1,
            symbolSize: [5, 20],
            label: {
                normal: {
                    show: true
                }
            },
            lineStyle: {
                normal: {
                    width: 5,
                    curveness: 0.2
                }
            }
        }, {
            //source: '审核',
            //target: '提出申请',
            label: {
                normal: {
                    show: true
                }
            },
            lineStyle: {
                normal: { curveness: 0.5 }
            }
        }, {
            source: '提出申请',
            target: '审核'
        }, {
            source: '审核',
            target: '组织鉴定'
        }, {
            source: '组织鉴定',
            target: '出具鉴定书'
        }],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }

    }]
};
myChart4.setOption(option)

var myChart3 = echarts.init(document.getElementById("myChart3"))
option = {
    title: {
        text: "图表四 职业病诊断机构分布图",
        subtext: '数据来源：职业卫生网',
        x: "center"
    },
    tooltip: {
        trigger: "item"
    },
    dataRange: {
        min: 0,
        max: 15,
        x: "left",
        y: "bottom",
        text: ["高", "低"],
        calculable: true,
        color: ["rgb(122, 140, 140)", "rgb(215, 213,201)"]
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                readOnly: false
            }
        },

    },
    roamController: {
        x: "right",
        mapTypeControl: {
            china: true
        }
    },
    series: [{
        name: "职业病诊断机构",
        type: "map",
        mapType: "china",
        roam: false,
        mapValueCalculation: "sum",
        itemStyle: {
            normal: {
                label: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: [{
                value: 2,
                name: "黑龙江"
            },
            {
                value: 1,
                name: "吉林"
            },
            {
                value: 5,
                name: "上海"
            },
            {
                value: 2,
                name: "重庆"
            },
            {
                value: 1,
                name: "辽宁"
            },
            {
                value: 2,
                name: "内蒙古"
            },
            {
                value: 2,
                name: "河北"
            },
            {
                value: 3,
                name: "北京"
            },
            {
                value: 3,
                name: "天津"
            },
            {
                value: 7,
                name: "山西"
            },
            {
                value: 13,
                name: "陕西"
            },
            {
                value: 3,
                name: "山东"
            },
            {
                value: 1,
                name: "河南"
            },
            {
                value: 3,
                name: "四川"
            },
            {
                value: 4,
                name: "江苏"
            },
            {
                value: 11,
                name: "安徽"
            },
            {
                value: 9,
                name: "浙江"
            },
            {
                value: 2,
                name: "广东"
            },
            {
                value: 1,
                name: "海南"
            }
        ]
    }]
};
myChart3.setOption(option)


window.onresize = function() {
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
};