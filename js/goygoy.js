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

'use strict';

$.fn.serializeObject = function(){
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$(function() {

  var API_URL = "http://78.47.61.164:3169/";

  // populate company names
  $.getJSON(API_URL + 'api/companies', function(response){

    response = "{\"success\":true,\"data\":[{\"name\":\"Turksell\",\"jobs\":[{\"name\":\"Müdür\"},{\"name\":\"Operasyon\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Database admini\"},{\"name\":\"Oracle admini\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]},{\"name\":\"Vodafonn\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Database admini\"},{\"name\":\"Oracle admini\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]},{\"name\":\"AVEYA\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Database admini\"},{\"name\":\"Oracle admini\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]},{\"name\":\"Aktif Tank\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"Garantili Teknoloji\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"Ak Tank\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"Huawey\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"Sonsuz Loop\",\"jobs\":[{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"}]},{\"name\":\"ArtistlanbuPr\",\"jobs\":[{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Topluluk yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"}]},{\"name\":\"Accen Tur\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"AtÃ¶lye 15\",\"jobs\":[{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"}]},{\"name\":\"Kartaka\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"}]},{\"name\":\"Praym Teknikoloji\",\"jobs\":[{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Database admini\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"OBÅžÅž\",\"jobs\":[{\"name\":\"Analist\"},{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Mobile developer\"},{\"name\":\"Mobil geliÅŸtirici\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]},{\"name\":\"Sahibinben\",\"jobs\":[{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"}]},{\"name\":\"TÃ¼rk Telefon\",\"jobs\":[{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"}]},{\"name\":\"TÃ¼rk Hava YolladÄ±\",\"jobs\":[{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"}]},{\"name\":\"YapÄ±kremit BankasÄ±\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"Trendyok\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"Markafonik\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Operasyon\"},{\"name\":\"Database admini\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Product Manager\"},{\"name\":\"ÃœrÃ¼n yÃ¶neticisi\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Test mÃ¼dÃ¼rÃ¼\"},{\"name\":\"Test direktÃ¶rÃ¼\"}]},{\"name\":\"TartÄ± Medya\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]},{\"name\":\"HermeÅŸ Ä°letim\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]},{\"name\":\"Magi Lick\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]},{\"name\":\"Forekis\",\"jobs\":[{\"name\":\"Sistem yÃ¶neticisi\"},{\"name\":\"Ä°ÅŸ geliÅŸtirici\"},{\"name\":\"Ä°nsan kaynaklarÄ±\"},{\"name\":\"MÃ¼ÅŸteri iliÅŸkileri yÃ¶neticisi\"},{\"name\":\"Software developer\"},{\"name\":\"YazÄ±lÄ±m geliÅŸtirici\"},{\"name\":\"YazÄ±lÄ±m mÃ¼hendisi\"},{\"name\":\"Mobile developer\"},{\"name\":\"Mobil geliÅŸtirici\"},{\"name\":\"Software architect\"},{\"name\":\"YazÄ±lÄ±m mimarÄ±\"},{\"name\":\"Analist\"},{\"name\":\"Analiz uzmanÄ±\"},{\"name\":\"Proje yÃ¶neticisi\"},{\"name\":\"Proje KoordinatÃ¶rÃ¼\"},{\"name\":\"MÃ¼dÃ¼r\"},{\"name\":\"Genel mÃ¼dÃ¼r\"},{\"name\":\"DirektÃ¶r\"},{\"name\":\"KoordinatÃ¶r\"},{\"name\":\"Kurucu ortak\"},{\"name\":\"Kurucu\"},{\"name\":\"Patron\"},{\"name\":\"Test uzmanÄ±\"},{\"name\":\"Test sorumlusu\"},{\"name\":\"Grafiker\"},{\"name\":\"Grafik tasarÄ±mcÄ±sÄ±\"},{\"name\":\"Web tasarÄ±mcÄ±sÄ±\"}]}]}";
    response = JSON.parse(response);
    var companies = {};//used when retrieving `jobs` array

    //construct `companies` and `companyData` at once
    var companyData = response.data.map(function(company){
      companies[company.name] = company.jobs;

      return {
        id: company.name,
        text: company.name}
    });

    $('#company').select2({
      data: companyData,
      allowClear: false,
      formatNoMatches: function(term) {
        return '<strong>' + term + '</strong> diye bi şirket yok ama istersen ekleyebiliriz, yukarı bak ↗';
      }
    })
    .select2('enable', true)
    
    .on('change', function(item) {
      newSelectionReset();

      var jobs = companies[ $(this).val() ];//jobs array
      var jobData = $.map(jobs, function(job){
        return {
          id: job.name,
          text: job.name}
      });

      $('#job').select2({
        data: jobData,
        allowClear: false,
      formatNoMatches: function(term) {
        return '<strong>' + term + '</strong> diye bi pozisyon yok ama istersen onu da ekleyebiliriz, yukarı bak ↗';
      }
      })
      .select2('enable', true)

      .on('change', function() {
        $('#year').removeAttr('readonly');
        $('#year').removeAttr('disabled');

        if(checkManager($(this).val())){
          $('#managerModal').modal('show');
        }
      });

    });

  });

  function newSelectionReset() {
    $('#job').select2('enable', false).select2("val", "");
    $('#year').val('').attr('readonly', 'true');
    $('#year').attr('disabled', 'true');
  };

  function reset() {
    $('#company').select2('enable', true).select2("val", "");
    $('#job').select2('enable', false).select2("val", "");
    $('#year').val('').attr('readonly', 'true');
    $('#year').attr('disabled', 'true');
    $('#resultContent').hide();
    $('#mainContent').show();
  };

  $('#back').click(reset);

  //prevent NaN input
  //Thanks: http://stackoverflow.com/a/3764841/878361
  var a = [];

  for (var i = 48; i < 58; i++){
    a.push(i);
  }

  $('#year').keypress(function(e) {
    var k = e.which;
    if (!(a.indexOf(k)>=0)){
      e.preventDefault();
    }
  });
  //end of prevent NaN input

  $('#submit').click(function(e) {

    $(this).button('loading');

    e.preventDefault();
    var data = $('form').serializeObject();

    //validation
    if( !data.hasOwnProperty('company') || !data.hasOwnProperty('job') || !data.hasOwnProperty('year')||
      data.company.trim() == "" || data.job.trim() == "" || data.year.trim() == "" || 
      !isFinite(data.year) || data.year < 0)
    {
      $('#validationErrorModal').modal('show');
      return;
    }

    $.ajax({
      type: 'post',
      url: API_URL + 'api/goygoy',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
      success: function(response, textStatus, jqXHR) {

        if(response.success === true){
          $('#mainContent').hide();

          $('#resultText').text(response.data.message);
          $('#resultPoint').text(response.data.point);
          var textMsg = '%25' + response.data.point + ' goygoycusun.' + response.data.message;
          $('#tweetButton').attr('href', "https://twitter.com/share?hashtags=goygoycu&text=" + textMsg + "&url=http://goygoycumuyuz.biz");
          $('#facebookButton').attr('href', "https://www.facebook.com/dialog/feed?app_id=334707233318136"+
            "&redirect_uri=http://goygoycumuyuz.biz/index.html"+
            "&name=Goygoycu%20muyuz?"+
            "&link=http://goygoycumuyuz.biz/"+
            "&picture=http://static.ddmcdn.com/gif/ebitda1.jpg"+
            "&caption=Yüzde "+response.data.point+" oranında goygoycusun.&description="+response.data.message);
          $('#resultContent').show();
        }
        else{
          $('#alertMessage').text(response.message || "Everything is something happened!");
          $('#alertModal').modal('show');
        }
        $('#submit').button('reset');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
        $(this).button('reset');
      }
    });

    return false;
  });//end of submit click

  $('#validationErrorModal').on('hidden', function () {
    $('#submit').button('reset');
  });

  var managerJobList = ['müdür', 'direktör', 'patron', 'ortak', 'kurucu'];
  function checkManager(jobString) {
    for (var i = 0; i < managerJobList.length; ++i) {
      if(jobString.toLowerCase().indexOf(managerJobList[i]) > -1){
        return true;
      }
    }
    return false;
  }

  // submit on enter key
  $("form #year").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      $('button[type=submit]').click();
      return false;
    } else {
      return true;
    }
  });

  // create a proxy click for our custom Linkedin share button.
  // Thanks http://blog.stchur.com/2010/01/15/programmatically-clicking-a-link-in-javascript/
  var proxyClickEvent = document.createEvent('MouseEvents');
  proxyClickEvent.initEvent('click' ,true ,true);

  $('#linkedinButton').click(function() {
    $('#linkedinGhostButtonContainer').find('a').first()[0].dispatchEvent(proxyClickEvent);
  });

});