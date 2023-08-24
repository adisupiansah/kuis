function mulaiKuis () {
    var isiNama = prompt("isi nama dulu");
    if (isiNama) {
    alert("Hello " + isiNama);
    alert("SELAMAT DATANG DI KUIZ TEKNIK INFORMATIKA");
    alert("disini " + isiNama + " ,menjawab soal menggunakan hruuf kecil, tidak di perbolehkan menggunakan huruf kapital");
    alert("jika " + isiNama + " menggunakan hruruf kapital, program akan menyatakan salah");
    alert(" disini ada 10 soal, dan masing2 soal bernilai 10 point...selamat menjawab " + isiNama + "");
    } else {
        alert("kamu tidak di perbolehkan mengikuti kuiz jika tidak mengisi nama");
        return;
    }           
                 var mulai = confirm(" are you ready to finish the quiz " + isiNama +" ?");
                if(mulai) {
                    let jawaban_1 = prompt("Siapakah Programmer pertama dunia ?");
                    if(jawaban_1 !="ada king lovelace" ) {
                        alert("maaf jawaban kamu salah");
                        alert("maaf kamu tidak berhasil lolos ke babak selanjutnya :(");
                        return;
                    } 
                    alert("luamayan hebat nih anak");
                
                    let jawaban_2 = prompt("apa kepanjangan dari JS ?");
                    if (jawaban_2 !="java script") {
                        // ini untuk jawaban slaah
                        alert("maaf jawaban kamu salah");
                        alert("maaf kamu tidak berhasil lolos untuk membuka kuis selanjutnya");
                        return;
                    }
                
                    let jawaban_3 = prompt("apa singkatan dari hypertext markup languange ?");
                    if(jawaban_3 !="html") {
                        alert("yahh salah dong, padahal dikit lagi untuk masuk babak selanjutnya");
                        alert("tapi gk papa kamu sudah bener 2, yang semangaat lagi ya belajarnya");
                        return;
                    }
                
                    
                    var lanjutkan = confirm(" apakah kamu mau lanjut kuis lagi ?");
                        if (lanjutkan) {
                            let jawaban_4 = prompt("siapa nama orang yang membuat kuis ini ?");
                            if(jawaban_4 !="adi") {
                                alert("yeh, padahal eazy banget jawabanya..masa salah sih");
                                alert("tapi gk papa, kamu bener 3 dan nilai kamu adlah 30")
                                return;
                            }
                
                            let jawaban_5 = prompt("siapakah nama orang yang menemukan komputer ?");
                            if(jawaban_5 !="charles babbage") {
                                alert(" yaelah bro, masa anak IT gk tau sih siapa penemu komputer");
                                alert("yaudh deh yang banyak ya belajarnya, kamu bener 4 dan nilai kamu 40");
                                return;
                            }



                            alert("kayaknya kita kedatangan tamu yang menarik nih..")
                            var lanjutkanDua = confirm("yakin untuk melanjutkan kuis ?");
                            if(lanjutkanDua) {
                                let jawaban_6 = prompt("string tipe data untuk menyimpan ?")
                                if(jawaban_6 !="teks"){
                                    alert("ups salah dung🤭, masa yang beginian gk bisa jawab")
                                    alert("kamu bener 6, dan nilai kamu 60... yang semangat lagi belajarnya");
                                    return;
                                }

                                let jawaban_7 = prompt("siapakah nama pendiri bahasa C++ ?");
                                if(jawaban_7 !="bjarne stroustrup") {
                                    alert("upss slaah🤭... kamu bener 6 dan nilai kamu 60");
                                    alert(" yang semangat ya belajarnya " + isiNama + " , jangan menyerah");
                                return;
                            }
                            let jawaban_8 = prompt("tahun berapa bahasa JavaScript di temukan ?");
                            if(jawaban_8 !="1995") {
                                alert(" ups salah🤭.. kamu bener 7 dan nilai kamu 70");
                                alert(" yang semangat ya belajarnya " + isiNama + " , jangan menyerah");
                                return;
                            }

                            let jawaban_9 = prompt("MySql merupakan, database atau bahasa pemrograman ?");
                                if(jawaban_9 !="database") {
                                    alert(" ups salah🤭.. kamu bener 8 dan nilai kamu 80");
                                    alert(" yang semangat lagi belajarnya");
                                    return;
                                }
                                    let jawaban_10 = prompt("integer merupakan tipe data yang menyimpan ? ");
                                    if (jawaban_10 != "angka") {
                                        alert("ups salah 🤭, jawbannya adalah angka, masa soal yang eazy begini gk dapat jawab");
                                        alert(" kamu bener 9 dan nilai kamu 90");
                                        return;
                                    }
                                    alert(" kaya kita mempunyai tamu yang hebat ni, bisa menjawab semua soal");
                                    alert(" yey kamu bener semua dan nilai kamu 100")
                            

                            }
                        } else {
                            alert(" kamu bener 3 dan nilai kamu 30 ")
                        }
                
                } else {
                    document.write("heh,nup...nyelesaikan kuiz gk mau...klau gk ada logika gk usah masuk IT dexx");
                }
    
   
}


