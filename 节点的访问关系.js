/**
 * Created by 13261 on 2017/9/12.
 */
/**
 *���ܣ�ͨ������������ǰһ���ֵ�Ԫ�ؽڵ�
 * @param ele
 * @returns {Element|*|Node}
 */
function prev(ele){
    var aaa = ele.previousElementSibling || ele.previousSibling;
    return aaa ;
}


/**
 *���ܣ�ͨ�����������ĺ�һ���ֵ�Ԫ�ؽڵ�
 * @param ele
 * @returns {Element|*|Node}
 */
function next(ele){
    return ele.nextElementSibling || ele.nextSibling;
}


function first(ele){
    return ele.firstElementChild || ele.firstChild;
}
