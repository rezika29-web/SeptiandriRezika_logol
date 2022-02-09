-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Feb 2022 pada 05.33
-- Versi server: 10.4.19-MariaDB
-- Versi PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_logol`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `m_karyawan`
--

CREATE TABLE `m_karyawan` (
  `id` bigint(20) NOT NULL,
  `nik` varchar(8) NOT NULL,
  `nama` varchar(150) DEFAULT NULL,
  `alamat` text NOT NULL,
  `tgllahir` datetime NOT NULL,
  `devisi` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `m_karyawan`
--

INSERT INTO `m_karyawan` (`id`, `nik`, `nama`, `alamat`, `tgllahir`, `devisi`, `status`, `createdAt`, `updatedAt`) VALUES
(2, '1', 'rezika3', 'alamat3', '2022-01-31 00:00:00', 'Finance', 'Kontrak', '2022-02-08 07:03:46', '2022-02-09 04:29:12'),
(5, '6', 'sdf', 'asfd', '2022-02-01 00:00:00', 'IT', 'serf', '2022-02-08 11:28:57', '2022-02-08 11:28:57'),
(9, '10220011', 'fsnns;nsk', 'klabslbs;f', '2022-02-01 00:00:00', 'IT', 'Tetap', '2022-02-08 12:02:09', '2022-02-08 12:02:09'),
(10, '10220011', 'a;enlbs', 'lba;fa;l', '2022-02-01 00:00:00', 'IT', 'Tetap', '2022-02-08 12:02:38', '2022-02-08 12:02:38'),
(11, '10220011', 'rezika', 'pondok gede', '2022-02-01 00:00:00', 'IT', 'Tetap', '2022-02-08 14:02:21', '2022-02-08 14:02:21'),
(12, '11220012', 'resika', 'pondok', '2022-02-01 00:00:00', 'HRD', 'Kontrak', '2022-02-08 14:02:48', '2022-02-08 14:02:48'),
(13, '12220013', 'recaob', 'bekasi', '2022-02-09 00:00:00', 'Finance', 'Kontrak', '2022-02-08 14:03:18', '2022-02-08 14:03:18');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `m_karyawan`
--
ALTER TABLE `m_karyawan`
  ADD PRIMARY KEY (`id`,`nik`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `m_karyawan`
--
ALTER TABLE `m_karyawan`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
