/**
 * Created by 13261 on 2017/9/12.
 */

//���ٶ�����װ
    //animate �˶�
function animate(ele,target){
    //Ҫ�ö�ʱ�����嶨ʱ��
    //clearInterval(): �����ʱ��
    clearInterval(ele.timer);
        //setINterval()��ʱ��
    ele.timer = setInterval(function(){
        //1.��ȡ����
            //��Ԫ�����     offsetLeft���붨λ��������������
        var step = target>ele.offsetLeft?10:-10;
        //2.��ֵ
        ele.style.left = ele.offsetLeft+step+"px";
        //3.ֹͣ��ʱ��������߹��ˣ������������һ����Ҳ�������ֵĿ��λ�ã�
        console.log(1);
            //Ŀ��λ�ú͵�ǰλ�õĲ�ֵ������һ��������ʱ��;
                //Math.abs : ����ֵ

        if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
            //����Ŀ��λ�ã������ʱ��
            ele.style.left = target+"px";
            clearInterval(ele.timer);

        }

    },30);

}




