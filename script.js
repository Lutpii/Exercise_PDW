function kirimData() {
    var nama = document.getElementById("nama").value
    var no = document.getElementById("no").value
    var Alamat = document.getElementById("alamat").value
    var tanggal = document.getElementById("tanggal").value
    var tiket = document.querySelector("input[name=tiket]:checked").value
    var jumlah = document.getElementById("jumlah").value

    alert(
        "Nama : " + nama +
        "\nNo HP : " + no + 
        "\nAlamat : " + Alamat +
        "\nTanggal : " + tanggal +
        "\nJenis Tiket : " + tiket +
        "\nJumlah Tiket : " + jumlah
    )
}