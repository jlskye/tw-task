var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log4js = require('log4js');
function MainMenu() {
    console.log(chalk.black.bold.bgYellow('         成绩单         '));
    items = [chalk.red.bold('AddStudent'), chalk.red.bold('ScoreReport')],
        index = readlineSync.keyInSelect(items, null, {
            cancel: chalk.red.bold('exit')
        });
    return index;
}

module.exports = () => {
    
    var totalStudent=[];    //save infomation of all students.
    var eachSum=[];
    while(true){
        var index= MainMenu();

        if(index==0){

            readlineSync.setDefaultOptions({limit: /([a-zA-Z])+,[0-9]+,([a-zA-Z])+,[0-9]+,([a-zA-Z])+:[0-9]+,([a-zA-Z])+:[0-9]+/,
            limitMessage:'wrong input format!'});
            let stu_info=readlineSync.question('please input student infomation(format:name,stu_id,nation,class,subject:score,...).\npress enter-key to submit\n>');
            let stu_array=stu_info.split(',');
            let sumScore=(parseInt(stu_array[4].slice(8,10))+parseInt(stu_array[5].slice(8,10)))
            let averageScore=sumScore *0.5;
            stu_array.push(averageScore);
            stu_array.push(sumScore);
            totalStudent.push(stu_array);
            console.log(chalk.green('学生: '+stu_array[0]+'的成绩被添加'));
            
 
        }else if(index==1){
            console.log(chalk.black.bold.bgYellow('         成绩单         '));
            console.log(chalk.red('姓名|语文|英语|平均分|总分'));
            console.log(chalk.white('========================'));
            let printContext='';
            let classSum=0;
            //print
            for(var i=0;i<totalStudent.length;i++){
                eachSum.push(totalStudent[i][7]);
                printContext+=totalStudent[i][0]+'|'+totalStudent[i][4].slice(8,10)+'|'+totalStudent[i][5].slice(8,10)
                    +'|'+totalStudent[i][6]+'|'+totalStudent[i][7];
                if(i!=totalStudent.length-1){
                    printContext+='\n';
                }
                classSum+=parseInt(totalStudent[i][7]);
            }
            //median
            eachSum.sort((a, b) => a - b);
            let lowMiddle = Math.floor((eachSum.length - 1) / 2);
            let highMiddle = Math.ceil((eachSum.length - 1) / 2);
            let median = (eachSum[lowMiddle] + eachSum[highMiddle]) / 2;
            console.log(printContext)
            console.log(chalk.white('========================'))
            console.log(chalk.white('全班总分平均数：'+classSum/totalStudent.length));
            console.log(chalk.white('全班总分中位数：'+median));
        }else {
            console.log('bye');
            break;
        }
    }
    
}