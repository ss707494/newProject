/**
 * Created by Administrator on 12/24.
 */

export async function get_in_theaters(){
	const respone = await fetch('http://api.douban.com/v2/movie/in_theaters');
	const json = await respone.json();
	return json.subjects;
}
