// TODO: Remove this polyfill once the below issue is sorted
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582
export default (global.requestAnimationFrame = cb => setTimeout(cb, 0));
