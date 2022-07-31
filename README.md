# nodeJS-axios-veri-getirme
axios ile https isteği yaparak ülke verisi getiren konsol uygulaması

# nodeJS-axios-veri-getirme
NodeJS ve npm paketlerinden axios, prompt ve chalk kullanılarak oluşturulan bir konsol uygulaması
NodeJS ve npm paketlerinden axios paketi ile http isteği, chalk paketi ile konsolda renkli çıktılar oluşturan kullanılarak rehber uygulaması oluşturmak.

# Getting Started - Proje Hakkında
Bu proje nodeJS kullanılarak geliştirmiştir. Projemizde npm paketlerinden axios ve prompt kullanılarak kullanıcı tarafından girilen ülke ismi girdisi ile http isteği gönderilen bir konsol uygulaması oluşturulmuştur. Bu konsol uygulamasında kullanıcı terminalde prompt: countryName: çıktısını gördükten sonra buraya verisini görmek istediği ülke ismini yazmalıdır. Program ilk olarak çalıştırıldığında örnek olarak rastgele sekiz tane ülkeyi kullanıcıya ipucu vermek amacı ile konsola yazdırır. Kullanıcı ister bu ülkelerden bir tanesini yazar isterse country.txt dosyası içerisinde bulunan ülkelerden bir tanesini yazarak http request işlemini başlatabilir. 
```
NOT!!!
İki veya daha fazla kelimden oluşan ülke isimleri için sadece ilk kelimenin girdi olarak verilmesi yeterlidir. kisisil, goster, listele, temizle ve sil komutları ile bir rehber uygulaması tasarlanmaktadır. Bu komutları yargs paketi ile renklendirmeleri ise chalk paketi ile 
kodlanmıştır.
```

# Prerequisites - Gereklilikler
| Gerekli Paket ve Modüller | İndirme İşlemi |
| ------ | ------ |
| node module | https://nodejs.org/en/download/ |
| npm file | npm install |

# Installing - Kurulum

### Projeyi terminal üzerinden indirmek için
```
git clone https://github.com/onrcan34/nodeJS-axios-veri-getirme.git
```
![image](https://user-images.githubusercontent.com/64845818/182032559-f9ac6b24-fa2f-4496-b413-e17b1057f8ee.png)

### Proje dizinine geçmek için
```
cd nodeJS-axios-veri-getirme
```
![image](https://user-images.githubusercontent.com/64845818/182032602-2dedee16-10dd-4c98-af3a-c398f9010011.png)

### tüm paketleri tek seferde kurmak için
```
npm i
```
![image](https://user-images.githubusercontent.com/64845818/182032695-fa1c572f-f776-4d47-b077-9328bc60fb2a.png)

node app.js help
```
![image](https://user-images.githubusercontent.com/64845818/178819255-294af9b2-132b-486f-ab2a-75670280771e.png)
### Rehber projesi ekle komutunu çalıştırmak için
```
node app.js ekle --isim="aras" --tel="21412412"
```
![image](https://user-images.githubusercontent.com/64845818/178820116-44509c69-ffd2-4ace-a8c6-002f57247649.png)
### Rehber projesi listele komutunu çalıştırmak için
```
node app.js listele
```
![image](https://user-images.githubusercontent.com/64845818/178820694-29168715-4be9-4163-9af6-370aeebf0fbd.png)

