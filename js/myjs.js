// membuat event click
$('.eukeur-scroll').on('click',function(event){

    // console.log('ok');

    // ambil #id nya pada nav yg di klik
    var tujuan = $(this).attr('href');
    // console.log(tujuan);

    // ambil elemenya dari nav yg di klik
    var elemenTujuan = $(tujuan);
    console.log(elemenTujuan.offset().top);

    // cek jarak by scroll
    // console.log($('body').scrollTop());

    // pindahkan scroll ke jarak tertentu
    // $('body').scrollTop('300.296875');

    // event.preventDefault();
});