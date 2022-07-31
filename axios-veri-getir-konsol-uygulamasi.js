
const axios = require('axios'); // https://restcountries.com web sitesi üzerinden veri çekmek için kullanırız
const prompt = require('prompt'); // kullanıcıdan ülke girdisi alırız.
const fs = require('fs'); // dosyadan okuma işlemi yapmak için kullanırız
const chalk = require('chalk'); // output değerlerini renklendirmek için kullanırız

console.log(`${chalk.bgGreen.bold("Which country do you want to about?")}${chalk.bgGreen.blue.bold.inverse("(Hint you pick one in country.txt)\n")}`);

// İşlem yaptığımız dizinde bulunan country.txt dosyasını okuma işlemi gerçekleştirir
fs.readFile('./country.txt', function (err, data) {
    const countryObj = JSON.parse(data); // dosyadan okuduğumuz veriyi parse ederek kullanabileceğimiz Array formuna dönüştürdüm.
    const countryArray = countryObj.sort(() => Math.random() - 0.5); // Dosyadan okunan ülke isimleri, her okuma işleminde rastgele olarak sıralanır.
    let veri = ''; // boş bir string oluşturduk çünkü kullanıcıya göstermek istediğimiz ülkelerin konsol üzerinde renklendirilmesini yaptıktan sonra bu string içerisine ekleyeceğim

    // for döngüsü ile countryArray içerisinde rastgele dizilen ülkelerden ilk 8 tanesini alır.
    for (let i = 0; i < 8; i++) {
        // switch yapısı ile for döngüsü her başa sardığında veri içerisine eklenecek ülkenin farklı bir renk ile yazdırılmasını sağlar
        switch (i) {
            case 0:
                // i değeri 0 olduğunda eklenecek ülke kırmızı ve kalın font ile yazdırılır
                veri += chalk.red.bold(countryArray[i]) + ', '
                break;
            case 1:
                veri += chalk.yellow.bold(countryArray[i]) + ', '
                break;
            case 2:
                veri += chalk.green.bold(countryArray[i]) + ', '
                break;
            case 3:
                veri += chalk.gray.bold(countryArray[i]) + ', '
                break;
            case 4:
                veri += chalk.magenta.bold(countryArray[i]) + ', '
                break;
            case 5:
                veri += chalk.white.bold(countryArray[i]) + ', '
                break;
            case 6:
                veri += chalk.blue.bold(countryArray[i]) + ', '
                break;
            case 7:
                veri += chalk.black.bold(countryArray[i]) + ', '
                break;
            case 8:
                veri += chalk.white(countryArray[i]) + ', '
                break;
        }

    }
    console.log(veri + '\n');
})

// Kullanıcı girdisi yukarıda yazdığım console.log ifadelerinden önce gelmemesi için 100 milisaniye beklme süresi verdim
setTimeout(() => {
    // prompt ile kullanıcıdan girdi aldım.
    prompt.get('countryName', (reject, resolve) => {
        // axios ile restcountries.com sitesine verdiğim ülke ismine göre get isteği bulundum.
        // axios ile bir promise ifade döner. Dönen ifadeyi (verileri) ele almak için then catch yapısı kullandım.
        const response = axios.get(`https://restcountries.com/v3.1/name/${resolve.countryName}`)
        response
            // then yapısı ile axios sonucu dönecek hatasız veri için yazdırma işlemi yaptım.
            .then((info) => {
                const ulke = info.data[0]; // sürekli info.data[0] yazmak yerine ulke değişkenine atayarak kısaltma yaptım.
                countryObj = {
                    // dönen değerlerden ülke ismin, başkenti, hangi bölgede bulunduğunu ve nüfus bilgilerini aldım. 
                    countryName: resolve.countryName,
                    capital: ulke.capital,
                    region: ulke.region,
                    population: ulke.population
                }
                console.log();
                console.log(countryObj);
            })
            // catch yapısı ile axios sonucu dönecek herhangi bir hataya karşı burada önlem aldım ve uyarı mesajı verdim.
            .catch((error) => {
                console.error(chalk.bgRed.bold("\nBir hata oluştu!!! Hata kodu görüntüleniyor..." + `\n\n${chalk.inverse(error.message)}`));
            })
    });
}, 100)
