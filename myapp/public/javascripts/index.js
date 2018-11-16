import _ from 'lodash';
import '../stylesheets/style.css';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}

function title() {
    var element = document.createElement('h1');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('hi');
    return element;
}
// console.log(1);
// console.log(_.drop([1, 2, 3], 2));
document.body.appendChild(component());
document.body.appendChild(title());