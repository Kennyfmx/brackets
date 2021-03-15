module.exports = function check(str, bracketsConfig) {
    let myConfig = bracketsConfig.map(el => el.join(''));
    let middle = str.length / 2;
    for (let i = 0; i < middle; i++) {
		for (let a = 0; a < myConfig.length; a++) {
            str = str.replace(myConfig[a], "");
        }
	}
	return (str.length === 0);
}
