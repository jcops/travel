let defaultcity = '上海'
try {
	if (localStorage.city) {
		defaultcity = localStorage
	}
} catch (e) {}

export default {
	city: defaultcity
}