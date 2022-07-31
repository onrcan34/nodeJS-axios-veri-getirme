# nodeJS-axios-veri-getirme
NodeJS ve npm paketlerinden axios, prompt ve chalk kullanılarak oluşturulan bir konsol uygulaması

# Getting Started - Proje Hakkında
Bu proje nodeJS kullanılarak geliştirmiştir. Projemizde npm paketlerinden axios ve prompt kullanılarak kullanıcı tarafından girilen ülke ismi girdisi ile http isteği gönderilen bir konsol uygulaması oluşturulmuştur. Bu konsol uygulamasında kullanıcı terminalde prompt: countryName: çıktısını gördükten sonra buraya verisini görmek istediği ülke ismini yazmalıdır. Program ilk olarak çalıştırıldığında örnek olarak rastgele sekiz tane ülkeyi kullanıcıya ipucu vermek amacı ile konsola yazdırır. Kullanıcı ister bu ülkelerden bir tanesini yazar isterse country.txt dosyası içerisinde bulunan ülkelerden bir tanesini yazarak http request işlemini başlatabilir. 
```
NOT!!!
İki veya daha fazla kelimeden oluşan ülke isimleri için sadece ilk kelimenin girdi olarak verilmesi yeterlidir.
```

# Prerequisites - Gereklilikler
| Gerekli Paket ve Modüller | İndirme İşlemi |
| ------ | ------ |
| node module | https://nodejs.org/en/download/ |
| all npm packages | npm install |

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


### Konsol uygulamamızı çalıştırmak için
```
node app.js 
```
![image](https://user-images.githubusercontent.com/64845818/182032970-6b684a6a-b4f1-4546-bfdf-342e79c0c866.png)

### Örnek olarak Türkiye hakkında bilgi almak için (ingilizce formatta yazılmalıdır)
```
Terminalde prompt: countryName: çıktısının yanına "turkey" yazarak, http get isteği yaptığımız websitesinden türkiye hakkında veriler getiririz
```
![image](https://user-images.githubusercontent.com/64845818/182033100-8e529da6-1605-43d9-9377-464cfbc5f695.png)

```
Aşağıdaki çıktı turkey girdisinin bir sonucudur.
```
![image](https://user-images.githubusercontent.com/64845818/182033394-87f938cc-eead-4dcf-80cb-877a43ac73c3.png)


### Kullanıcıya ipucu olarak verilen ülkeler renkli şekilde terminalde görüntülenmektedir.
Listelenen ülkeler arasında iki veya daha fazla isimli ülke varsa sadece ilk kelimeyi yazma yeterlidir.
![image](https://user-images.githubusercontent.com/64845818/182033135-9c835f19-af40-4ccd-9a45-fcfbb58e5f00.png)



