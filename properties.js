/*
This file is part of Goygoycumuyuz.biz.

Goygoycumuyuz.biz is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Goygoycumuyuz.biz is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Goygoycumuyuz.biz.  If not, see <http://www.gnu.org/licenses/>.
*/

module.exports = {
	PORT 					 : process.env.PORT || 3169, //fantastic port :)
	IP 					     : process.env.IP,
	DB_URL                   : "mongodb://127.0.0.1:27017/goygoy",
	SECURED_URL_MATCHERS	 : [],
	WEB_APP_PATH             : "/webContent", // Without a '/' at the end but at the start!
	WELCOME_PAGE             : "index.html"
};