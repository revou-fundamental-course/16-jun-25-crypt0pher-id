document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('pilih');
    const formLuas = document.getElementById('form-luas');
    const formKeliling = document.getElementById('form-keliling');
    const penjelasanLuas = document.getElementById('penjelasan-luas');
    const penjelasanKeliling = document.getElementById('penjelasan-keliling');

    const hasilLuas = document.getElementById('hasil-luas');
    const caraLuas = document.getElementById('cara-luas');
    const hasilKeliling = document.getElementById('hasil-keliling');
    const caraKeliling = document.getElementById('cara-keliling');

    select.addEventListener('change', function () {
        const isLuas = select.value === 'luas';
        formLuas.style.display = isLuas ? 'block' : 'none';
        formKeliling.style.display = isLuas ? 'none' : 'block';
        penjelasanLuas.style.display = isLuas ? 'flex' : 'none';
        penjelasanKeliling.style.display = isLuas ? 'none' : 'flex';
    });

    document.getElementById('reset-luas').onclick = () => {
        formLuas.reset();
        hasilLuas.textContent = '';
        caraLuas.textContent = '';
    };

    document.getElementById('reset-keliling').onclick = () => {
        formKeliling.reset();
        hasilKeliling.textContent = '';
        caraKeliling.textContent = '';
    };

    formLuas.addEventListener('submit', function (e) {
        e.preventDefault();
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);

        if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
            hasilLuas.textContent = 'Nilai alas dan tinggi harus lebih dari 0.';
            caraLuas.textContent = '';
            return;
        }

        const luas = 0.5 * alas * tinggi;
        hasilLuas.textContent = `Luas Segitiga: ${luas % 1 === 0 ? luas : luas.toFixed(2)} cm²`;
        caraLuas.innerHTML = `Cara perhitungan:<br> L = 1/2 × a × t<br> L = 1/2 × ${alas} × ${tinggi} = ${luas % 1 === 0 ? luas : luas.toFixed(2)} cm²`;
    });

    formKeliling.addEventListener('submit', function (e) {
        e.preventDefault();
        const sisi1 = parseFloat(document.getElementById('sisi1').value);
        const sisi2 = parseFloat(document.getElementById('sisi2').value);
        const sisi3 = parseFloat(document.getElementById('sisi3').value);

        if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
            hasilKeliling.textContent = 'Mohon isi semua sisi segitiga terlebih dahulu.';
            caraKeliling.textContent = '';
            return;
        }

        if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
            hasilKeliling.textContent = 'Setiap sisi segitiga harus bernilai lebih dari 0.';
            caraKeliling.textContent = '';
            return;
        }

        const keliling = sisi1 + sisi2 + sisi3;
        hasilKeliling.textContent = `Keliling Segitiga: ${keliling % 1 === 0 ? keliling : keliling.toFixed(2)} cm`;
        caraKeliling.innerHTML = `Cara perhitungan:<br> K = a + b + c<br> K = ${sisi1} + ${sisi2} + ${sisi3} = ${keliling % 1 === 0 ? keliling : keliling.toFixed(2)} cm`;
    });

    ['alas', 'tinggi', 'sisi1', 'sisi2', 'sisi3'].forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', () => {
            if (input.value < 0) input.value = 0;
        });
    });
});