/**
 * Created by 13261 on 2017/9/12.
 */
function getStule(ele,attr){
    //���¼���ԭ��һ����֧���ĸ����ĸ�
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];

    }else{
        return ele.currentStyle[attr];
    }
}