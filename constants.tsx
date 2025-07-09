

import React from 'react'; // Required for JSX in icons
import { BookDefinition, FieldDefinition, DATA_NEGERI_KEY, USAGE_GUIDE_KEY, PEMBUAT_SURAT_KEY, KlasifikasiSuratKeterangan } from './types'; 

// Using Heroicons (MIT License) by Tailwind Labs
// https://heroicons.com/
export const DocumentTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a.375.375 0 0 1-.375-.375V6.75A3.75 3.75 0 0 0 9 3H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
    <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.5H16.5A5.23 5.23 0 0 1 19.5 9V9.75h-2.25A2.625 2.625 0 0 0 14.625 12H12a2.625 2.625 0 0 0-2.625 2.625V15h1.875c.414 0 .75.336.75.75v3a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h1.5v-1.875A2.625 2.625 0 0 0 9.375 9.75H7.5V6.75A5.25 5.25 0 0 1 12.75 1.5h.221Z" />
  </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.5 6.375a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75ZM4.5 10.125a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75ZM4.5 13.875a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75ZM19.5 6.375a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75V6.375Z" />
    <path fillRule="evenodd" d="M17.705 3.442A.75.75 0 0 1 18 3.75v16.5a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75V3.75a.75.75 0 0 1 .75-.75h12.705Zm-1.5 1.5H6v13.5h10.205V4.942Z" clipRule="evenodd" />
  </svg>
);

export const BanknotesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM18 12a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-.75-.75h-.008a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75H18Z" clipRule="evenodd" />
    <path d="M5.25 10.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-.75-.75H5.25ZM6 13.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75H6.75a.75.75 0 0 0 .75-.75V14.25a.75.75 0 0 0-.75-.75H6Z" />
    </svg>
);

export const BuildingOfficeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-3.375A3.75 3.75 0 0 1 12.375 7.5H12V4.5A2.25 2.25 0 0 0 9.75 2.25H4.5ZM11.25 7.5V15h3.75V9A2.25 2.25 0 0 0 12.75 6.75H9.75A2.25 2.25 0 0 0 7.5 9v6h3.75V7.5H11.25Z" clipRule="evenodd" />
    <path d="M15 17.25a.75.75 0 0 0 .75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008a.75.75 0 0 0-.75.75v.008ZM15.75 19.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V19.5Z" />
    <path d="M17.25 17.25a.75.75 0 0 0 .75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008a.75.75 0 0 0-.75.75v.008ZM18 19.5a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V19.5Z" />
    <path d="M8.25 4.5a.75.75 0 0 0 .75.75H9a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75v.008c0 .414-.336.75-.75.75H8.25Z" />
    <path d="M6.75 6a.75.75 0 0 0 .75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-.008a.75.75 0 0 0-.75.75v.008Z" />
    <path d="M5.25 4.5a.75.75 0 0 0 .75.75H6a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0-.75.75v.008c0 .414-.336.75-.75.75H5.25Z" />
    </svg>
);

export const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.5 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-2.596 1.352l-.707.943A3 3 0 0 1 9.404 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Z" />
    </svg>
);

export const InboxArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.5 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H3.75a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    <path d="M3 3.75A2.25 2.25 0 0 1 5.25 1.5h13.5A2.25 2.25 0 0 1 21 3.75v16.5A2.25 2.25 0 0 1 18.75 22.5H5.25A2.25 2.25 0 0 1 3 20.25V3.75Zm1.5.75v2.449a.75.75 0 0 0 .22.53l3.22 3.22a.75.75 0 0 0 1.06 0l1.3-1.3a2.25 2.25 0 0 1 3.181-.22L16.5 11.81V4.5H4.5Zm0 15V12.19l-1.03-1.03a.75.75 0 0 0-1.061 0l-.22.22A2.25 2.25 0 0 0 1.969 13.5v6A.75.75 0 0 0 2.719 21h15.562a.75.75 0 0 0 .75-.75v-2.69l-3.31-3.31a2.25 2.25 0 0 0-3.182.22l-1.3 1.3a.75.75 0 0 1-1.06 0l-3.22-3.22a.75.75 0 0 0-.53-.22H4.5v6.75Z" />
  </svg>
);

export const PaperAirplaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3-3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
  </svg>
);

export const ClipboardDocumentListIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.5 3A2.502 2.502 0 0 0 8 5.502V5.75a.75.75 0 0 0 1.5 0V5.502a1 1 0 0 1 1-1h3.001a1 1 0 0 1 1 1V5.75a.75.75 0 0 0 1.5 0V5.502A2.502 2.502 0 0 0 13.501 3h-3.002ZM4.125 4.5A2.625 2.625 0 0 0 1.5 7.125v12.75A2.625 2.625 0 0 0 4.125 22.5h15.75A2.625 2.625 0 0 0 22.5 19.875V7.125A2.625 2.625 0 0 0 19.875 4.5H4.125Z" clipRule="evenodd" />
    <path d="M7.5 10.5a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H8.25a.75.75 0 0 1-.75-.75Z" />
    <path d="M7.5 13.5a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H8.25a.75.75 0 0 1-.75-.75Z" />
    <path d="M7.5 16.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H8.25a.75.75 0 0 1-.75-.75Z" />
  </svg>
);

export const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5-1.5h-6a1.5 1.5 0 01-1.5-1.5V15a.75.75 0 00-1.5 0v3.75a3 3 0 003 3h6a3 3 0 003-3V5.25a3 3 0 00-3-3h-6a3 3 0 00-3 3V9A.75.75 0 009 9V5.25a1.5 1.5 0 011.5-1.5h6zM5.78 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06l-1.72-1.72H15a.75.75 0 000-1.5H4.06l1.72-1.72a.75.75 0 000-1.06z" clipRule="evenodd" />
    </svg>
);

export const ArrowDownTrayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75Zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75Z" clipRule="evenodd" />
  </svg>
);

export const ArrowUpTrayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75Z" clipRule="evenodd" />
    </svg>
);

export const KeyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.79-.223 1.142L6.999 12.9a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l2.438-2.438c.353-.19.752-.29 1.142-.223A6.75 6.75 0 0015.75 1.5Zm0 9a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5Z" clipRule="evenodd" />
        <path d="M8.25 9.75a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5Z" />
        <path d="M9.75 11.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5Z" />
        <path d="M12.342 10.923a.75.75 0 00-1.114-1.012l-1.5 1.625a.75.75 0 101.114 1.012l1.5-1.625Z" />
    </svg>
);

export const BOOK_CATEGORIES = {
  PERENCANAAN_NEGERI: 'Perencanaan Negeri',
  PEMBUAT_SURAT: 'Pembuat Surat',
  ADMINISTRASI_UMUM: 'Administrasi Umum',
  ADMINISTRASI_PENDUDUK: 'Administrasi Penduduk',
  ADMINISTRASI_KEUANGAN: 'Administrasi Keuangan',
  ADMINISTRASI_PEMBANGUNAN: 'Administrasi Pembangunan',
  ADMINISTRASI_LAINNYA: 'Administrasi Lainnya (BPD & Lembaga)',
};

export const PLANNING_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-2.12 2.12a.75.75 0 001.06 1.06L9 18.71l2.87 2.87a.75.75 0 001.06-1.06L10.79 18H12a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M6.75 3a.75.75 0 01.75.75v10.5a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5V3.75A.75.75 0 0112.75 3v10.5a3 3 0 01-3 3H9a3 3 0 01-3-3V3.75A.75.75 0 016.75 3ZM15 6.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75ZM15.75 9a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3Z" clipRule="evenodd" />
  </svg>
);

export const DEFAULT_PASSWORD = 'admin123';
export const CUSTOM_PASSWORD_STORAGE_KEY = 'custom_digital_negeri_password';

export const KLASIFIKASI_SURAT_KETERANGAN_OPTIONS: KlasifikasiSuratKeterangan[] = [
    { kode: '400/01', label: 'Surat Izin Hajatan', deskripsiSingkat: 'Untuk izin mengadakan acara/hajatan.' },
    { kode: '400/04', label: 'Surat Keterangan Izin Orang Tua', deskripsiSingkat: 'Persetujuan orang tua untuk suatu keperluan.' },
    { kode: '400/05', label: 'Surat Rekomendasi Pemasangan Listrik', deskripsiSingkat: 'Rekomendasi untuk pemasangan listrik baru.' },
    { kode: '400/06', label: 'Surat Tugas Kader Posyandu/Linmas', deskripsiSingkat: 'Surat tugas resmi untuk kader.' },
    { kode: '400/07', label: 'Surat Dukungan Kegiatan Masyarakat', deskripsiSingkat: 'Memberikan dukungan resmi untuk kegiatan.' },
    { kode: '424/01', label: 'Surat Keterangan Telah Melakukan Penelitian', deskripsiSingkat: 'Menerangkan seseorang telah melakukan penelitian.' },
    { kode: '430/01', label: 'Surat Pengantar Pengaduan', deskripsiSingkat: 'Pengantar untuk menyampaikan pengaduan resmi.' },
    { kode: '430/02', label: 'Surat Keterangan Kehilangan', deskripsiSingkat: 'Menerangkan kehilangan dokumen/barang.' },
    { kode: '430/03', label: 'Surat Keterangan Tahanan', deskripsiSingkat: 'Menerangkan status sebagai tahanan.' },
    { kode: '470/01', label: 'Surat Keterangan Domisili', deskripsiSingkat: 'Menerangkan domisili penduduk.' },
    { kode: '470/02', label: 'Surat Keterangan Pindah Datang', deskripsiSingkat: 'Untuk penduduk yang pindah masuk ke wilayah.' },
    { kode: '470/03', label: 'Surat Keterangan Pindah Keluar', deskripsiSingkat: 'Untuk penduduk yang pindah keluar wilayah.' },
    { kode: '470/04', label: 'Surat Keterangan Kelahiran', deskripsiSingkat: 'Mencatat dan menerangkan kelahiran.' },
    { kode: '470/05', label: 'Surat Keterangan Kematian', deskripsiSingkat: 'Menerangkan peristiwa kematian.' },
    { kode: '470/06', label: 'Surat Pengantar KTP', deskripsiSingkat: 'Pengantar untuk membuat/memperbarui KTP.' },
    { kode: '470/07', label: 'Surat Pengantar KK', deskripsiSingkat: 'Pengantar untuk membuat/memperbarui KK.' },
    { kode: '470/08', label: 'Surat Keterangan Belum Menikah', deskripsiSingkat: 'Untuk menyatakan status belum menikah.' },
    { kode: '470/09', label: 'Surat Keterangan Janda/Duda', deskripsiSingkat: 'Untuk menyatakan status janda/duda.' },
    { kode: '470/10', label: 'Surat Keterangan Beda Identitas / Nama', deskripsiSingkat: 'Menerangkan perbedaan data identitas.' },
    { kode: '472/01', label: 'Surat Pengantar Nikah (Model N1-N4)', deskripsiSingkat: 'Surat pengantar untuk keperluan pernikahan.' },
    { kode: '472/02', label: 'Surat Keterangan Cerai', deskripsiSingkat: 'Menerangkan status perceraian.' },
    { kode: '472/03', label: 'Surat Izin Orang Tua Nikah', deskripsiSingkat: 'Surat izin dari orang tua untuk pernikahan.' },
    { kode: '474/01', label: 'Surat Keterangan Tidak Mampu (SKTM)', deskripsiSingkat: 'Untuk keperluan bantuan sosial, dll.' },
    { kode: '474/02', label: 'Rekomendasi Bantuan Sosial', deskripsiSingkat: 'Surat rekomendasi untuk bantuan sosial.' },
    { kode: '474/03', label: 'Rekomendasi PKH/BPNT', deskripsiSingkat: 'Rekomendasi untuk program PKH/BPNT.' },
    { kode: '474/04', label: 'Rekomendasi Rumah Tidak Layak Huni (RTLH)', deskripsiSingkat: 'Rekomendasi untuk program RTLH.' },
    { kode: '511/01', label: 'Surat Keterangan Usaha (SKU)', deskripsiSingkat: 'Menerangkan kepemilikan usaha.' },
    { kode: '511/02', label: 'Surat Domisili Usaha', deskripsiSingkat: 'Menerangkan domisili tempat usaha.' },
    { kode: '511/03', label: 'Rekomendasi Izin Usaha Mikro', deskripsiSingkat: 'Rekomendasi untuk Izin Usaha Mikro.' },
    { kode: '511/04', label: 'Surat Rekomendasi NIB', deskripsiSingkat: 'Rekomendasi untuk pembuatan NIB.' },
    { kode: '640/01', label: 'Surat Keterangan Tanah (SKT)', deskripsiSingkat: 'Menerangkan kepemilikan/status tanah.' },
    { kode: '640/02', label: 'Surat Keterangan Riwayat Tanah', deskripsiSingkat: 'Menjelaskan sejarah kepemilikan tanah.' },
    { kode: '640/03', label: 'Surat Keterangan Jual Beli Tanah', deskripsiSingkat: 'Menerangkan telah terjadi jual beli tanah.' },
    { kode: '640/04', label: 'Surat Keterangan Waris Tanah', deskripsiSingkat: 'Menerangkan status ahli waris atas tanah.' },
    { kode: '640/05', label: 'Surat Sporadik (Penguasaan Fisik Tanah)', deskripsiSingkat: 'Pernyataan penguasaan fisik bidang tanah.' },
    { kode: '640/10', label: 'Surat Perjanjian Jual Beli Tanah', deskripsiSingkat: 'Dokumen perjanjian jual beli tanah.' },
    { kode: '900/01', label: 'Surat Keterangan Penghasilan', deskripsiSingkat: 'Menerangkan jumlah penghasilan seseorang.' },
    { kode: '900/02', label: 'Surat Keterangan Keringanan Biaya', deskripsiSingkat: 'Rekomendasi untuk keringanan biaya.' },
    { kode: '900/03', label: 'Surat Rekomendasi Beasiswa', deskripsiSingkat: 'Rekomendasi untuk pengajuan beasiswa.' },
];


export const statusRpjmnegeriOptions = [
    'Berlaku',
    'Dalam Penyusunan',
    'Revisi',
    'Tidak Berlaku'
];

export const DATA_NEGERI_FIELDS: FieldDefinition[] = [
  { name: 'nama_negeri', label: 'Nama Negeri', type: 'text', required: true },
  { name: 'kode_negeri', label: 'Kode Wilayah Administrasi Negeri (Kemendagri)', type: 'text', required: true },
  { name: 'nama_kepala_pemerintahan_negeri', label: 'Nama Kepala Pemerintahan Negeri', type: 'text' },
  { name: 'alamat_kantor_negeri', label: 'Alamat Kantor Negeri', type: 'textarea' },
  { name: 'nomor_telepon_kantor_negeri', label: 'Nomor Telepon Kantor', type: 'text' },
  { name: 'email_negeri', label: 'Email Resmi Negeri', type: 'text' },
  { name: 'website_negeri', label: 'Website Resmi Negeri', type: 'text' },
  { name: 'logo_negeri_path', label: 'Logo Negeri (URL atau Data Base64)', type: 'file', accept: 'image/*' },
  { name: 'luas_wilayah', label: 'Luas Wilayah', type: 'text', placeholder: 'Contoh: 150.5 Ha' },
  { name: 'jumlah_dusun', label: 'Jumlah Dusun', type: 'number' },
  { name: 'jumlah_rw', label: 'Jumlah RW', type: 'number' },
  { name: 'jumlah_rt', label: 'Jumlah RT', type: 'number' },
  { name: 'nama_kecamatan', label: 'Nama Kecamatan', type: 'text', required: true },
  { name: 'nama_kabupaten_kota', label: 'Nama Kabupaten/Kota', type: 'text', required: true },
  { name: 'nama_provinsi', label: 'Nama Provinsi', type: 'text', required: true },
];

// START: Field Definitions for all Books

export const BUKU_PERATURAN_FIELDS: FieldDefinition[] = [
    { name: 'nomor_peraturan', label: 'Nomor Peraturan', type: 'text', required: true },
    { name: 'nama_peraturan', label: 'Nama Peraturan', type: 'textarea', required: true },
    { name: 'tentang', label: 'Tentang', type: 'textarea', required: true },
    { name: 'jenis_peraturan', label: 'Jenis Peraturan', type: 'select', options: ['Pernegeri', 'Peraturan Bersama Kepala Pemerintahan Negeri'] },
    { name: 'tanggal_ditetapkan', label: 'Tanggal Ditetapkan', type: 'date', required: true },
    { name: 'tanggal_diundangkan', label: 'Tanggal Diundangkan', type: 'date' },
    { name: 'nomor_lembaran_negeri', label: 'Nomor Lembaran Negeri', type: 'text' },
    { name: 'status_peraturan', label: 'Status Peraturan', type: 'select', options: ['Berlaku', 'Dicabut', 'Diubah'] },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KEPUTUSAN_KEPALA_PEMERINTAHAN_NEGERI_FIELDS: FieldDefinition[] = [
    { name: 'nomor_keputusan', label: 'Nomor Keputusan', type: 'text', required: true },
    { name: 'nama_keputusan', label: 'Nama Keputusan', type: 'textarea', required: true },
    { name: 'tentang', label: 'Tentang', type: 'textarea', required: true },
    { name: 'tanggal_keputusan', label: 'Tanggal Keputusan', type: 'date', required: true },
    { name: 'dasar_hukum', label: 'Dasar Hukum', type: 'textarea' },
    { name: 'status_keputusan', label: 'Status Keputusan', type: 'select', options: ['Berlaku', 'Dicabut'] },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_INVENTARIS_FIELDS: FieldDefinition[] = [
    { name: 'kode_barang', label: 'Kode Barang', type: 'text' },
    { name: 'nama_barang', label: 'Nama Barang', type: 'text', required: true },
    { name: 'merk_tipe', label: 'Merk/Tipe', type: 'text' },
    { name: 'jumlah', label: 'Jumlah', type: 'number', required: true },
    { name: 'satuan_barang', label: 'Satuan', type: 'text', placeholder: 'unit, buah, set' },
    { name: 'tahun_perolehan', label: 'Tahun Perolehan', type: 'text', placeholder: 'YYYY' },
    { name: 'sumber_perolehan', label: 'Sumber Perolehan', type: 'select', options: ['APBNegeri', 'Bantuan Provinsi', 'Bantuan Kabupaten', 'Hibah', 'Lainnya'] },
    { name: 'harga_perolehan', label: 'Harga Perolehan (Rp)', type: 'number' },
    { name: 'kondisi', label: 'Kondisi', type: 'select', options: ['Baik', 'Rusak Ringan', 'Rusak Berat'], required: true },
    { name: 'lokasi_penyimpanan', label: 'Lokasi Penyimpanan', type: 'text' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_APARAT_FIELDS: FieldDefinition[] = [
    { name: 'nama', label: 'Nama Lengkap', type: 'text', required: true },
    { name: 'nik', label: 'NIK', type: 'text' },
    { name: 'nip', label: 'NIP', type: 'text' },
    { name: 'jabatan', label: 'Jabatan', type: 'text', required: true },
    { name: 'tempat_lahir', label: 'Tempat Lahir', type: 'text' },
    { name: 'tanggal_lahir', label: 'Tanggal Lahir', type: 'date' },
    { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'] },
    { name: 'pendidikan_terakhir', label: 'Pendidikan Terakhir', type: 'text' },
    { name: 'status_kepegawaian', label: 'Status Kepegawaian', type: 'select', options: ['PNS', 'PTT', 'Honorer', 'Perangkat Negeri'] },
    { name: 'nomor_sk_pengangkatan', label: 'Nomor SK Pengangkatan', type: 'text' },
    { name: 'tanggal_sk_pengangkatan', label: 'Tanggal SK Pengangkatan', type: 'date' },
    { name: 'nomor_sk_pemberhentian', label: 'Nomor SK Pemberhentian', type: 'text' },
    { name: 'tanggal_sk_pemberhentian', label: 'Tanggal SK Pemberhentian', type: 'date' },
    { name: 'alamat', label: 'Alamat', type: 'textarea', required: true },
    { name: 'no_telepon', label: 'No. Telepon', type: 'text' },
    { name: 'email', label: 'Email', type: 'text' },
];

export const BUKU_TANAH_FIELDS: FieldDefinition[] = [
    { name: 'lokasi', label: 'Lokasi', type: 'text', required: true },
    { name: 'luas', label: 'Luas', type: 'text', required: true, placeholder: '1000 m2 atau 1.5 Ha' },
    { name: 'nomor_sertifikat', label: 'Nomor Sertifikat', type: 'text' },
    { name: 'jenis_hak', label: 'Jenis Hak', type: 'text', placeholder: 'Hak Milik, Hak Guna Bangunan' },
    { name: 'status', label: 'Status', type: 'textarea', required: true, placeholder: 'Sertifikat Hak Milik No. 123 Atas Nama Negeri X' },
    { name: 'batas_utara', label: 'Batas Utara', type: 'text' },
    { name: 'batas_selatan', label: 'Batas Selatan', type: 'text' },
    { name: 'batas_timur', label: 'Batas Timur', type: 'text' },
    { name: 'batas_barat', label: 'Batas Barat', type: 'text' },
    { name: 'penggunaan_saat_ini', label: 'Penggunaan Saat Ini', type: 'text' },
    { name: 'nilai_aset_tanah', label: 'Nilai Aset Tanah (Rp)', type: 'number' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_AGENDA_SURAT_MASUK_FIELDS: FieldDefinition[] = [
    { name: 'tanggal_diterima', label: 'Tanggal Diterima', type: 'date', required: true },
    { name: 'nomor_surat_masuk', label: 'Nomor Surat Masuk', type: 'text', required: true },
    { name: 'tanggal_surat', label: 'Tanggal Surat', type: 'date' },
    { name: 'pengirim', label: 'Pengirim', type: 'text', required: true },
    { name: 'perihal_surat', label: 'Perihal Surat', type: 'textarea', required: true },
    { name: 'lampiran_surat_masuk', label: 'Lampiran', type: 'text', placeholder: '3 berkas' },
    { name: 'disposisi_kepada', label: 'Disposisi Kepada', type: 'text' },
    { name: 'isi_disposisi', label: 'Isi Disposisi', type: 'textarea' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_AGENDA_SURAT_KELUAR_FIELDS: FieldDefinition[] = [
    { name: 'tanggal_kirim', label: 'Tanggal Kirim', type: 'date', required: true },
    { name: 'nomor_surat_keluar', label: 'Nomor Surat Keluar', type: 'text', required: true },
    { name: 'tujuan_surat', label: 'Tujuan Surat', type: 'text', required: true },
    { name: 'perihal_surat', label: 'Perihal Surat', type: 'textarea', required: true },
    { name: 'lampiran_surat_keluar', label: 'Lampiran', type: 'text' },
    { name: 'pengolah_surat', label: 'Pengolah Surat', type: 'text' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_EKSPEDISI_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Kirim', type: 'date', required: true },
    { name: 'nomor_surat_dikirim', label: 'Nomor Surat Dikirim', type: 'text', required: true },
    { name: 'tujuan', label: 'Tujuan', type: 'text', required: true },
    { name: 'isi_ringkas', label: 'Isi Ringkas / Perihal', type: 'textarea', required: true },
    { name: 'nama_penerima', label: 'Nama Penerima', type: 'text' },
    { name: 'tanggal_diterima_penerima', label: 'Tanggal Diterima', type: 'date' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_LEMBARAN_BERITA_FIELDS: FieldDefinition[] = [
    { name: 'nomor_lembaran_berita_negeri', label: 'Nomor Lembaran/Berita', type: 'text' },
    { name: 'tanggal', label: 'Tanggal Publikasi', type: 'date', required: true },
    { name: 'judul', label: 'Judul', type: 'text', required: true },
    { name: 'jenis_publikasi', label: 'Jenis Publikasi', type: 'select', options: ['Pengumuman', 'Berita Negeri'] },
    { name: 'isi_ringkas', label: 'Isi Ringkas', type: 'textarea', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_INDUK_PENDUDUK_FIELDS: FieldDefinition[] = [
  { name: 'nomor_kk', label: 'Nomor KK', type: 'text', required: true },
  { name: 'nik', label: 'NIK', type: 'text', required: true },
  { name: 'nama', label: 'Nama Lengkap', type: 'text', required: true },
  { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'] },
  { name: 'tempat_lahir', label: 'Tempat Lahir', type: 'text' },
  { name: 'tanggal_lahir', label: 'Tanggal Lahir', type: 'date' },
  { name: 'golongan_darah', label: 'Golongan Darah', type: 'select', options: ['A', 'B', 'AB', 'O', 'Tidak Tahu'] },
  { name: 'agama', label: 'Agama', type: 'text' },
  { name: 'suku', label: 'Suku', type: 'text' },
  { name: 'pendidikan_terakhir', label: 'Pendidikan Terakhir', type: 'text' },
  { name: 'dapat_membaca_huruf', label: 'Dapat Membaca Huruf', type: 'select', options: ['Latin', 'Daerah', 'Arab', 'Lainnya', 'Tidak'] },
  { name: 'pekerjaan', label: 'Pekerjaan', type: 'text' },
  { name: 'penghasilan_per_hari', label: 'Penghasilan per Hari (Rp)', type: 'number' },
  { name: 'penghasilan_per_bulan', label: 'Penghasilan per Bulan (Rp)', type: 'number' },
  { name: 'penghasilan_per_tahun', label: 'Penghasilan per Tahun (Rp)', type: 'number' },
  { name: 'status_hubungan_dalam_keluarga', label: 'Status Hub. Keluarga', type: 'text', placeholder: 'Kepala Keluarga, Istri, Anak...' },
  { name: 'status_perkawinan', label: 'Status Perkawinan', type: 'text' },
  { name: 'nomor_akta_perkawinan', label: 'Nomor Akta Perkawinan', type: 'text' },
  { name: 'tanggal_perkawinan', label: 'Tanggal Perkawinan', type: 'date' },
  { name: 'nomor_akta_perceraian', label: 'Nomor Akta Perceraian', type: 'text' },
  { name: 'tanggal_perceraian', label: 'Tanggal Perceraian', type: 'date' },
  { name: 'kewarganegaraan', label: 'Kewarganegaraan', type: 'select', options: ['WNI', 'WNA'] },
  { name: 'nomor_paspor', label: 'Nomor Paspor', type: 'text' },
  { name: 'nomor_kitas_kitap', label: 'Nomor KITAS/KITAP', type: 'text' },
  { name: 'nama_ayah', label: 'Nama Ayah', type: 'text' },
  { name: 'nik_ayah', label: 'NIK Ayah', type: 'text' },
  { name: 'nama_ibu', label: 'Nama Ibu', type: 'text' },
  { name: 'nik_ibu', label: 'NIK Ibu', type: 'text' },
  { name: 'alamat_lengkap', label: 'Alamat Lengkap', type: 'textarea', required: true },
  { name: 'rt', label: 'RT', type: 'text' },
  { name: 'rw', label: 'RW', type: 'text' },
  { name: 'dusun', label: 'Dusun', type: 'text' },
  { name: 'nomor_telepon', label: 'Nomor Telepon', type: 'text' },
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'status_keberadaan', label: 'Status Keberadaan', type: 'text', placeholder: 'Tinggal Tetap, Merantau...' },
  { name: 'nomor_akta_kelahiran', label: 'Nomor Akta Kelahiran', type: 'text' },
  { name: 'jenis_disabilitas', label: 'Jenis Disabilitas', type: 'text', placeholder: 'Tidak Ada, Tuna Daksa...' },
  { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_MUTASI_PENDUDUK_FIELDS: FieldDefinition[] = [
    { name: 'nik', label: 'NIK', type: 'text', required: true },
    { name: 'nama', label: 'Nama Lengkap', type: 'text', required: true },
    { name: 'jenis_mutasi', label: 'Jenis Mutasi', type: 'select', options: ['Lahir', 'Mati', 'Pindah Keluar', 'Datang Masuk'], required: true },
    { name: 'tanggal', label: 'Tanggal Mutasi', type: 'date', required: true },
    { name: 'tempat_dilahirkan', label: 'Tempat Dilahirkan', type: 'text' },
    { name: 'penolong_kelahiran', label: 'Penolong Kelahiran', type: 'text' },
    { name: 'tempat_meninggal', label: 'Tempat Meninggal', type: 'text' },
    { name: 'sebab_meninggal', label: 'Sebab Meninggal', type: 'text' },
    { name: 'alamat_tujuan_pindah', label: 'Alamat Tujuan Pindah', type: 'textarea' },
    { name: 'alasan_pindah', label: 'Alasan Pindah', type: 'text' },
    { name: 'klasifikasi_pindah', label: 'Klasifikasi Pindah', type: 'select', options: ['Antar Negeri', 'Antar Kecamatan', 'Antar Kab/Kota', 'Antar Provinsi'] },
    { name: 'alamat_asal_datang', label: 'Alamat Asal Datang', type: 'textarea' },
    { name: 'alasan_datang', label: 'Alasan Datang', type: 'text' },
    { name: 'klasifikasi_datang', label: 'Klasifikasi Datang', type: 'select', options: ['Antar Negeri', 'Antar Kecamatan', 'Antar Kab/Kota', 'Antar Provinsi'] },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_REKAP_PENDUDUK_FIELDS: FieldDefinition[] = [
    { name: 'bulan', label: 'Bulan', type: 'text', required: true, placeholder: 'Januari' },
    { name: 'tahun', label: 'Tahun', type: 'text', required: true, placeholder: 'YYYY' },
    { name: 'jumlah_penduduk_awal_bulan', label: 'Jml Penduduk Awal Bulan', type: 'number' },
    { name: 'jumlah_lahir', label: 'Jumlah Lahir', type: 'number' },
    { name: 'jumlah_mati', label: 'Jumlah Mati', type: 'number' },
    { name: 'jumlah_pindah_keluar', label: 'Jumlah Pindah Keluar', type: 'number' },
    { name: 'jumlah_datang_masuk', label: 'Jumlah Datang Masuk', type: 'number' },
    { name: 'jumlah_penduduk_akhir_bulan', label: 'Jml Penduduk Akhir Bulan', type: 'number', required: true },
    { name: 'jumlah_laki_laki', label: 'Jumlah Laki-laki', type: 'number' },
    { name: 'jumlah_perempuan', label: 'Jumlah Perempuan', type: 'number' },
    { name: 'jumlah_kk', label: 'Jumlah KK', type: 'number' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_PENDUDUK_SEMENTARA_FIELDS: FieldDefinition[] = [
    { name: 'nama', label: 'Nama Lengkap', type: 'text', required: true },
    { name: 'nik', label: 'NIK', type: 'text' },
    { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'] },
    { name: 'tempat_lahir', label: 'Tempat Lahir', type: 'text' },
    { name: 'tanggal_lahir', label: 'Tanggal Lahir', type: 'date' },
    { name: 'pekerjaan', label: 'Pekerjaan', type: 'text' },
    { name: 'kewarganegaraan', label: 'Kewarganegaraan', type: 'text' },
    { name: 'alamat_asal', label: 'Alamat Asal', type: 'textarea' },
    { name: 'alamat_tinggal_sementara', label: 'Alamat Tinggal Sementara', type: 'textarea', required: true },
    { name: 'maksud_kedatangan', label: 'Maksud Kedatangan', type: 'text' },
    { name: 'tanggal_datang', label: 'Tanggal Datang', type: 'date', required: true },
    { name: 'rencana_tinggal_sampai', label: 'Rencana Tinggal Sampai', type: 'date' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KTP_KK_FIELDS: FieldDefinition[] = [
    { name: 'tanggal_pengajuan', label: 'Tanggal Pengajuan', type: 'date', required: true },
    { name: 'nik_pemohon', label: 'NIK Pemohon', type: 'text', required: true },
    { name: 'nama_pemohon', label: 'Nama Pemohon', type: 'text', required: true },
    { name: 'nomor_kk_lama', label: 'Nomor KK Lama', type: 'text' },
    { name: 'nomor_kk_baru', label: 'Nomor KK Baru', type: 'text' },
    { name: 'jenis_permohonan', label: 'Jenis Permohonan', type: 'select', options: ['KTP Baru', 'KK Baru', 'Perubahan Data KTP', 'Perubahan Data KK', 'Lainnya'], required: true },
    { name: 'status_dokumen', label: 'Status Dokumen', type: 'select', options: ['Diajukan', 'Diproses', 'Selesai', 'Diambil'] },
    { name: 'tanggal_selesai_diproses', label: 'Tanggal Selesai', type: 'date' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_PENJABARAN_APBNEGERI_FIELDS: FieldDefinition[] = [
    { name: 'tahun', label: 'Tahun Anggaran', type: 'text', required: true, placeholder: 'YYYY' },
    { name: 'kode_rekening_kegiatan', label: 'Kode Rekening Kegiatan', type: 'text', required: true },
    { name: 'nama_kegiatan', label: 'Nama Kegiatan', type: 'text', required: true },
    { name: 'sub_kegiatan', label: 'Sub-kegiatan', type: 'text' },
    { name: 'uraian_detail', label: 'Uraian Detail', type: 'textarea', required: true },
    { name: 'target_output_kegiatan', label: 'Target Output Kegiatan', type: 'text' },
    { name: 'volume_detail', label: 'Volume', type: 'text' },
    { name: 'satuan_detail', label: 'Satuan', type: 'text' },
    { name: 'harga_satuan_detail', label: 'Harga Satuan (Rp)', type: 'number' },
    { name: 'jumlah', label: 'Jumlah Anggaran (Rp)', type: 'number', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_RKA_FIELDS: FieldDefinition[] = [
    { name: 'tahun', label: 'Tahun Anggaran', type: 'text', required: true, placeholder: 'YYYY' },
    { name: 'kode_kegiatan', label: 'Kode Kegiatan', type: 'text', required: true },
    { name: 'kegiatan', label: 'Nama Kegiatan', type: 'text', required: true },
    { name: 'sumber_dana_rka', label: 'Sumber Dana RKA', type: 'text' },
    { name: 'penanggung_jawab_kegiatan', label: 'Penanggung Jawab', type: 'text' },
    { name: 'lokasi_kegiatan', label: 'Lokasi Kegiatan', type: 'text' },
    { name: 'waktu_pelaksanaan', label: 'Waktu Pelaksanaan', type: 'text', placeholder: 'Jan-Mar 2024' },
    { name: 'anggaran', label: 'Anggaran (Rp)', type: 'number', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KAS_UMUM_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal', type: 'date', required: true },
    { name: 'nomor_bukti_kas', label: 'Nomor Bukti Kas', type: 'text', required: true },
    { name: 'kode_rekening_transaksi', label: 'Kode Rekening', type: 'text' },
    { name: 'uraian', label: 'Uraian', type: 'textarea', required: true },
    { name: 'penerimaan', label: 'Penerimaan (Rp)', type: 'number' },
    { name: 'pengeluaran', label: 'Pengeluaran (Rp)', type: 'number' },
    { name: 'saldo', label: 'Saldo (Rp)', type: 'number', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KAS_PEMBANTU_FIELDS: FieldDefinition[] = [
    { name: 'kegiatan', label: 'Kegiatan Terkait', type: 'text', required: true },
    { name: 'kode_rekening_kegiatan_terkait', label: 'Kode Rekening Kegiatan', type: 'text' },
    { name: 'tanggal', label: 'Tanggal', type: 'date', required: true },
    { name: 'nomor_bukti_kas_pembantu', label: 'Nomor Bukti Kas', type: 'text', required: true },
    { name: 'uraian_transaksi_pembantu', label: 'Uraian', type: 'textarea', required: true },
    { name: 'penerimaan', label: 'Penerimaan (Rp)', type: 'number' },
    { name: 'pengeluaran', label: 'Pengeluaran (Rp)', type: 'number' },
    { name: 'saldo', label: 'Saldo (Rp)', type: 'number', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_BANK_FIELDS: FieldDefinition[] = [
    { name: 'nama_bank', label: 'Nama Bank', type: 'text', required: true },
    { name: 'nomor_rekening_negeri', label: 'Nomor Rekening', type: 'text', required: true },
    { name: 'tanggal', label: 'Tanggal', type: 'date', required: true },
    { name: 'nomor_bukti_bank', label: 'Nomor Bukti Bank', type: 'text', required: true },
    { name: 'uraian', label: 'Uraian', type: 'textarea', required: true },
    { name: 'masuk', label: 'Masuk (Rp)', type: 'number' },
    { name: 'keluar', label: 'Keluar (Rp)', type: 'number' },
    { name: 'saldo', label: 'Saldo (Rp)', type: 'number', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_PANJAR_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal', type: 'date', required: true },
    { name: 'nomor_bukti_panjar', label: 'Nomor Bukti Panjar', type: 'text', required: true },
    { name: 'penerima_panjar', label: 'Penerima Panjar', type: 'text', required: true },
    { name: 'uraian', label: 'Uraian Keperluan', type: 'textarea', required: true },
    { name: 'jumlah', label: 'Jumlah (Rp)', type: 'number', required: true },
    { name: 'batas_waktu_pertanggungjawaban', label: 'Batas Waktu PJ', type: 'date' },
    { name: 'tanggal_pertanggungjawaban', label: 'Tanggal PJ', type: 'date' },
    { name: 'jumlah_dipertanggungjawabkan', label: 'Jumlah Di-PJ-kan (Rp)', type: 'number' },
    { name: 'sisa_kurang_panjar', label: 'Sisa/Kurang Panjar (Rp)', type: 'number' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KEGIATAN_PEMBANGUNAN_FIELDS: FieldDefinition[] = [
    { name: 'tahun', label: 'Tahun Anggaran', type: 'text', required: true, placeholder: 'YYYY' },
    { name: 'id_rkp_terkait', label: 'ID RKP Terkait', type: 'text' },
    { name: 'kegiatan', label: 'Nama Kegiatan', type: 'text', required: true },
    { name: 'sumber_dana_realisasi', label: 'Sumber Dana Realisasi', type: 'text' },
    { name: 'volume_realisasi', label: 'Volume Realisasi', type: 'text' },
    { name: 'satuan_realisasi', label: 'Satuan', type: 'text' },
    { name: 'realisasi', label: 'Realisasi Anggaran (Rp)', type: 'number', required: true },
    { name: 'persentase_kemajuan', label: 'Persentase Kemajuan (%)', type: 'number' },
    { name: 'tanggal_mulai_pelaksanaan', label: 'Tanggal Mulai', type: 'date' },
    { name: 'tanggal_selesai_pelaksanaan', label: 'Tanggal Selesai', type: 'date' },
    { name: 'kontraktor_pelaksana', label: 'Kontraktor Pelaksana', type: 'text' },
    { name: 'masalah_hambatan', label: 'Masalah/Hambatan', type: 'textarea' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_INVENTARIS_HASIL_FIELDS: FieldDefinition[] = [
    { name: 'tahun', label: 'Tahun Pembangunan', type: 'text', required: true, placeholder: 'YYYY' },
    { name: 'jenis_pembangunan', label: 'Jenis Pembangunan', type: 'text', placeholder: 'Jalan, Jembatan, Gedung...' },
    { name: 'hasil', label: 'Nama Hasil Pembangunan', type: 'text', required: true, placeholder: 'Jalan Rabat Beton RT 01' },
    { name: 'lokasi_aset_pembangunan', label: 'Lokasi Aset', type: 'text' },
    { name: 'jumlah', label: 'Jumlah', type: 'number', required: true },
    { name: 'satuan_hasil', label: 'Satuan', type: 'text', placeholder: 'unit, meter, m2' },
    { name: 'nilai_aset', label: 'Nilai Aset (Rp)', type: 'number' },
    { name: 'sumber_dana_pembangunan_aset', label: 'Sumber Dana', type: 'text' },
    { name: 'kondisi_aset_saat_ini', label: 'Kondisi Aset', type: 'select', options: ['Baik', 'Perlu Perbaikan', 'Rusak'] },
    { name: 'foto_dokumentasi', label: 'Foto Dokumentasi (Link/Path)', type: 'text' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KADER_FIELDS: FieldDefinition[] = [
    { name: 'nama', label: 'Nama Kader', type: 'text', required: true },
    { name: 'nik_kader', label: 'NIK Kader', type: 'text' },
    { name: 'jenis_kelamin_kader', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'] },
    { name: 'alamat_kader', label: 'Alamat', type: 'textarea' },
    { name: 'no_telepon_kader', label: 'No. Telepon', type: 'text' },
    { name: 'bidang_kaderisasi', label: 'Bidang Kaderisasi', type: 'text', required: true, placeholder: 'Kesehatan, Pemberdayaan, Posyandu, TPK' },
    { name: 'tahun_aktif', label: 'Tahun Aktif', type: 'text', placeholder: 'YYYY' },
    { name: 'tanggal_pelatihan_diterima', label: 'Tanggal Pelatihan', type: 'date' },
    { name: 'status_keaktifan', label: 'Status Keaktifan', type: 'select', options: ['Aktif', 'Tidak Aktif'] },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

// Administrasi Lainnya
export const BUKU_SURAT_KELUAR_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Surat', type: 'date', required: true },
    { name: 'nomor_surat', label: 'Nomor Surat', type: 'text', required: true },
    { name: 'tujuan', label: 'Tujuan', type: 'text', required: true },
    { name: 'perihal_surat_bpd', label: 'Perihal Surat', type: 'text', required: true },
    { name: 'lampiran_bpd', label: 'Lampiran', type: 'text' },
    { name: 'isi_ringkas', label: 'Isi Ringkas', type: 'textarea' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_SURAT_MASUK_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Surat', type: 'date', required: true },
    { name: 'nomor_surat', label: 'Nomor Surat', type: 'text', required: true },
    { name: 'tanggal_surat_diterima', label: 'Tanggal Diterima', type: 'date' },
    { name: 'pengirim', label: 'Pengirim', type: 'text', required: true },
    { name: 'perihal_surat_bpd', label: 'Perihal Surat', type: 'text', required: true },
    { name: 'isi_ringkas', label: 'Isi Ringkas', type: 'textarea' },
    { name: 'disposisi_bpd', label: 'Disposisi BPD', type: 'text' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_EKSPEDISI_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Kirim', type: 'date', required: true },
    { name: 'nomor_surat_dikirim_bpd', label: 'Nomor Surat Dikirim', type: 'text', required: true },
    { name: 'tujuan', label: 'Tujuan', type: 'text', required: true },
    { name: 'isi_ringkas', label: 'Isi Ringkas / Perihal', type: 'textarea', required: true },
    { name: 'nama_penerima_bpd', label: 'Nama Penerima', type: 'text' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_DATA_INVENTARIS_BPD_FIELDS: FieldDefinition[] = [
    { name: 'kode_barang_bpd', label: 'Kode Barang', type: 'text' },
    { name: 'nama_barang', label: 'Nama Barang', type: 'text', required: true },
    { name: 'merk_tipe_bpd', label: 'Merk/Tipe', type: 'text' },
    { name: 'jumlah', label: 'Jumlah', type: 'number', required: true },
    { name: 'satuan_barang_bpd', label: 'Satuan', type: 'text', placeholder: 'unit, buah, set' },
    { name: 'tahun_perolehan_bpd', label: 'Tahun Perolehan', type: 'text', placeholder: 'YYYY' },
    { name: 'sumber_perolehan_bpd', label: 'Sumber Perolehan', type: 'text' },
    { name: 'harga_perolehan_bpd', label: 'Harga Perolehan (Rp)', type: 'number' },
    { name: 'kondisi', label: 'Kondisi', type: 'select', options: ['Baik', 'Rusak Ringan', 'Rusak Berat'], required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_LAPORAN_KEUANGAN_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tahun', label: 'Tahun Anggaran', type: 'text', required: true, placeholder: 'YYYY' },
    { name: 'jenis_transaksi_bpd', label: 'Jenis Transaksi', type: 'select', options: ['Penerimaan', 'Pengeluaran'] },
    { name: 'nomor_bukti_transaksi_bpd', label: 'Nomor Bukti', type: 'text' },
    { name: 'uraian', label: 'Uraian', type: 'textarea', required: true },
    { name: 'jumlah', label: 'Jumlah (Rp)', type: 'number', required: true },
    { name: 'sumber_dana_anggaran_bpd', label: 'Sumber Dana/Anggaran', type: 'text' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_TAMU_FIELDS: FieldDefinition[] = [ // For both Tamu Umum & BPD
    { name: 'nama', label: 'Nama Tamu', type: 'text', required: true },
    { name: 'alamat', label: 'Alamat Tamu', type: 'textarea', required: true },
    { name: 'instansi_tamu', label: 'Instansi Tamu', type: 'text' },
    { name: 'jabatan_tamu', label: 'Jabatan Tamu', type: 'text' },
    { name: 'nomor_telepon_tamu', label: 'Nomor Telepon Tamu', type: 'text' },
    { name: 'tanggal', label: 'Tanggal', type: 'date', required: true },
    { name: 'keperluan', label: 'Keperluan', type: 'textarea', required: true },
    { name: 'tujuan_pejabat_ditemui', label: 'Pejabat/Staf yang Ditemui', type: 'text' },
];

export const BUKU_ANGGOTA_BPD_FIELDS: FieldDefinition[] = [
    { name: 'nama', label: 'Nama Anggota', type: 'text', required: true },
    { name: 'nik_anggota_bpd', label: 'NIK Anggota', type: 'text' },
    { name: 'jabatan', label: 'Jabatan', type: 'select', options: ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Anggota'], required: true },
    { name: 'tempat_tanggal_lahir_anggota_bpd', label: 'Tempat, Tanggal Lahir', type: 'text', placeholder: 'Tempat, YYYY-MM-DD' },
    { name: 'jenis_kelamin_anggota_bpd', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'] },
    { name: 'pendidikan_terakhir_anggota_bpd', label: 'Pendidikan Terakhir', type: 'text' },
    { name: 'nomor_sk_pengangkatan_bpd', label: 'Nomor SK Pengangkatan', type: 'text' },
    { name: 'tanggal_sk_pengangkatan_bpd', label: 'Tanggal SK Pengangkatan', type: 'date' },
    { name: 'awal_periode_jabatan_bpd', label: 'Awal Periode Jabatan', type: 'text', placeholder: 'YYYY' },
    { name: 'akhir_periode_jabatan_bpd', label: 'Akhir Periode Jabatan', type: 'text', placeholder: 'YYYY' },
    { name: 'alamat', label: 'Alamat', type: 'textarea', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KEGIATAN_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Kegiatan', type: 'date', required: true },
    { name: 'jenis_kegiatan_bpd', label: 'Jenis Kegiatan', type: 'select', options: ['Rapat', 'Kunjungan Kerja', 'Sosialisasi', 'Musyawarah'] },
    { name: 'kegiatan', label: 'Nama/Tema Kegiatan', type: 'text', required: true },
    { name: 'tempat_kegiatan_bpd', label: 'Tempat Kegiatan', type: 'text' },
    { name: 'pemimpin_kegiatan_bpd', label: 'Pemimpin Kegiatan', type: 'text' },
    { name: 'jumlah_peserta_bpd', label: 'Jumlah Peserta', type: 'number' },
    { name: 'keterangan', label: 'Hasil/Kesimpulan', type: 'textarea' },
];

export const BUKU_ASPIRASI_MASYARAKAT_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Penerimaan', type: 'date', required: true },
    { name: 'nama', label: 'Nama Penyampai', type: 'text', required: true },
    { name: 'alamat_penyampai_aspirasi', label: 'Alamat Penyampai', type: 'textarea' },
    { name: 'kontak_penyampai_aspirasi', label: 'Kontak (HP/Email)', type: 'text' },
    { name: 'topik_aspirasi', label: 'Topik Aspirasi', type: 'text' },
    { name: 'aspirasi', label: 'Isi Aspirasi', type: 'textarea', required: true },
    { name: 'media_penyampaian', label: 'Media Penyampaian', type: 'select', options: ['Langsung', 'Surat', 'Online', 'Kotak Saran'] },
    { name: 'tindak_lanjut_bpd', label: 'Tindak Lanjut BPD', type: 'textarea' },
    { name: 'status_aspirasi', label: 'Status Aspirasi', type: 'select', options: ['Diterima', 'Diproses', 'Selesai Ditindaklanjuti', 'Belum Ditindaklanjuti'] },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_ABSENSI_RAPAT_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Rapat', type: 'date', required: true },
    { name: 'agenda_rapat_bpd', label: 'Agenda Rapat', type: 'text', required: true },
    { name: 'nama', label: 'Nama Peserta', type: 'text', required: true },
    { name: 'jabatan_peserta_bpd', label: 'Jabatan Peserta', type: 'text', placeholder: 'Anggota BPD, Perangkat Negeri...' },
    { name: 'status_kehadiran_bpd', label: 'Status Kehadiran', type: 'select', options: ['Hadir', 'Izin', 'Alpha'] },
    { name: 'tanda_tangan', label: 'Tanda Tangan', type: 'text', placeholder: 'Paraf atau TTD' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_NOTULEN_RAPAT_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Rapat', type: 'date', required: true },
    { name: 'agenda_rapat_bpd_notulen', label: 'Agenda Rapat', type: 'text', required: true },
    { name: 'pemimpin_rapat_bpd', label: 'Pemimpin Rapat', type: 'text' },
    { name: 'notulis_rapat_bpd', label: 'Notulis Rapat', type: 'text' },
    { name: 'daftar_hadir_terlampir', label: 'Daftar Hadir Terlampir', type: 'select', options: ['Ya', 'Tidak'] },
    { name: 'isi_ringkas', label: 'Isi Ringkas Rapat', type: 'textarea', required: true },
    { name: 'keputusan_rapat_lengkap', label: 'Keputusan Lengkap Rapat', type: 'textarea' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_PERATURAN_KEPUTUSAN_BPD_FIELDS: FieldDefinition[] = [
    { name: 'jenis_dokumen_bpd', label: 'Jenis Dokumen', type: 'select', options: ['Peraturan BPD', 'Keputusan BPD'], required: true },
    { name: 'tanggal', label: 'Tanggal Penetapan', type: 'date', required: true },
    { name: 'nomor', label: 'Nomor', type: 'text', required: true },
    { name: 'judul', label: 'Judul', type: 'text', required: true },
    { name: 'tentang_bpd', label: 'Tentang', type: 'textarea' },
    { name: 'dasar_hukum_bpd', label: 'Dasar Hukum', type: 'textarea' },
    { name: 'status_dokumen_bpd', label: 'Status Dokumen', type: 'select', options: ['Berlaku', 'Dicabut', 'Diubah'] },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KEPUTUSAN_MUSYAWARAH_BPD_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Musyawarah', type: 'date', required: true },
    { name: 'agenda_musyawarah_bpd', label: 'Agenda Musyawarah', type: 'text', required: true },
    { name: 'nomor', label: 'Nomor Keputusan', type: 'text', required: true },
    { name: 'pemimpin_musyawarah_bpd', label: 'Pemimpin Musyawarah', type: 'text' },
    { name: 'jumlah_peserta_musyawarah_bpd', label: 'Jumlah Peserta', type: 'number' },
    { name: 'daftar_hadir_musyawarah_lampiran', label: 'Daftar Hadir Terlampir', type: 'select', options: ['Ya', 'Tidak'] },
    { name: 'isi_ringkas', label: 'Isi Ringkas Keputusan', type: 'textarea', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KEPUTUSAN_MUSYAWARAH_PERENCANAAN_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal Musyawarah', type: 'date', required: true },
    { name: 'jenis_musyawarah_perencanaan', label: 'Jenis Musyawarah', type: 'select', options: ['Musrenbangnegeri', 'Musnegeri Khusus RPJMNegeri', 'Lainnya'] },
    { name: 'agenda_musrenbang', label: 'Agenda Musyawarah', type: 'text', required: true },
    { name: 'nomor', label: 'Nomor Keputusan', type: 'text', required: true },
    { name: 'pemimpin_musrenbang', label: 'Pemimpin Musyawarah', type: 'text' },
    { name: 'jumlah_peserta_musrenbang', label: 'Jumlah Peserta', type: 'number' },
    { name: 'usulan_prioritas_disepakati', label: 'Usulan Prioritas Disepakati', type: 'textarea' },
    { name: 'isi_ringkas', label: 'Isi Ringkas Keputusan', type: 'textarea', required: true },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_PENGURUS_LEMBAGA_FIELDS: FieldDefinition[] = [
    { name: 'lembaga', label: 'Nama Lembaga', type: 'select', options: ['LPM', 'Karang Taruna', 'PKK', 'RT', 'RW', 'Lainnya'], required: true },
    { name: 'nama', label: 'Nama Pengurus', type: 'text', required: true },
    { name: 'nik_pengurus', label: 'NIK Pengurus', type: 'text' },
    { name: 'jabatan', label: 'Jabatan', type: 'text', required: true },
    { name: 'alamat_pengurus', label: 'Alamat', type: 'textarea' },
    { name: 'no_telepon_pengurus', label: 'No. Telepon', type: 'text' },
    { name: 'nomor_sk_pengangkatan_lembaga', label: 'Nomor SK Pengangkatan', type: 'text' },
    { name: 'tanggal_sk_pengangkatan_lembaga', label: 'Tanggal SK Pengangkatan', type: 'date' },
    { name: 'masa_bakti_pengurus', label: 'Masa Bakti', type: 'text', placeholder: '2023-2028' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_ABSENSI_APARAT_FIELDS: FieldDefinition[] = [
    { name: 'tanggal', label: 'Tanggal', type: 'date', required: true },
    { name: 'nama', label: 'Nama Aparat', type: 'text', required: true },
    { name: 'jabatan', label: 'Jabatan', type: 'text', required: true },
    { name: 'jam_datang', label: 'Jam Datang', type: 'text', placeholder: 'HH:MM' },
    { name: 'jam_pulang', label: 'Jam Pulang', type: 'text', placeholder: 'HH:MM' },
    { name: 'status_kehadiran', label: 'Status Kehadiran', type: 'select', options: ['Hadir', 'Sakit', 'Izin', 'Dinas Luar', 'Cuti', 'Alpha'], required: true },
    { name: 'tanda_tangan_aparat', label: 'Tanda Tangan', type: 'text', placeholder: 'Paraf atau TTD' },
    { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_KEPENDUDUKAN_BPD_FIELDS: FieldDefinition[] = [
    { name: 'nama', label: 'Nama Lengkap', type: 'text', required: true },
    { name: 'nik_bpd', label: 'NIK', type: 'text' },
    { name: 'jabatan_bpd', label: 'Jabatan di BPD', type: 'text', required: true },
    { name: 'tempat_lahir_bpd', label: 'Tempat Lahir', type: 'text' },
    { name: 'tanggal_lahir_bpd', label: 'Tanggal Lahir', type: 'date' },
    { name: 'jenis_kelamin_bpd', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'] },
    { name: 'pendidikan_terakhir_bpd', label: 'Pendidikan Terakhir', type: 'text' },
    { name: 'alamat_lengkap_bpd', label: 'Alamat Lengkap', type: 'textarea', required: true },
    { name: 'status_perkawinan_bpd', label: 'Status Perkawinan', type: 'text' },
    { name: 'pekerjaan_lain_bpd', label: 'Pekerjaan Lain (di luar BPD)', type: 'text' },
    { name: 'keterangan_bpd', label: 'Keterangan', type: 'textarea' },
];


export const BUKU_RPJMNEGERI_FIELDS: FieldDefinition[] = [
  { name: 'tahun_awal_periode', label: 'Tahun Awal Periode RPJMNegeri', type: 'number', required: true, placeholder: 'YYYY' },
  { name: 'tahun_akhir_periode', label: 'Tahun Akhir Periode RPJMNegeri', type: 'number', required: true, placeholder: 'YYYY' },
  { name: 'nomor_pernegeri_rpjmnegeri', label: 'No. Pernegeri RPJMNegeri', type: 'text', required: true },
  { name: 'tanggal_penetapan_pernegeri', label: 'Tgl Penetapan Pernegeri', type: 'date', required: true },
  { name: 'tanggal_diundangkan_pernegeri', label: 'Tgl Diundangkan Pernegeri', type: 'date' },
  { name: 'nomor_lembaran_negeri_rpjmnegeri', label: 'No. Lembaran Negeri', type: 'text' },
  { name: 'tanggal_musnegeri_penetapan_rpjmnegeri', label: 'Tgl Musnegeri Penetapan', type: 'date' },
  { name: 'nomor_berita_acara_musnegeri_rpjmnegeri', label: 'No. BA Musnegeri Penetapan RPJMNegeri', type: 'text' },
  { name: 'dokumen_rpjmnegeri_final_link', label: 'Link Dokumen Final', type: 'text', placeholder: 'URL atau path file' },
  { name: 'status_rpjmnegeri', label: 'Status RPJMNegeri', type: 'select', options: statusRpjmnegeriOptions, required: true },
  { name: 'visi_negeri', label: 'Visi Negeri', type: 'textarea', required: true },
  { name: 'misi_negeri', label: 'Misi Negeri', type: 'textarea', required: true },
  { name: 'potensi_dan_masalah_utama', label: 'Potensi dan Masalah Utama', type: 'textarea' },
  { name: 'arah_kebijakan_pembangunan_negeri', label: 'Arah Kebijakan Pembangunan Negeri', type: 'textarea' },
  { name: 'prioritas_program_bidang_penyelenggaraan_pemerintahan', label: 'Prioritas Bidang Penyelenggaraan Pemerintahan', type: 'textarea' },
  { name: 'prioritas_program_bidang_pelaksanaan_pembangunan', label: 'Prioritas Bidang Pelaksanaan Pembangunan', type: 'textarea' },
  { name: 'prioritas_program_bidang_pembinaan_kemasyarakatan', label: 'Prioritas Bidang Pembinaan Kemasyarakatan', type: 'textarea' },
  { name: 'prioritas_program_bidang_pemberdayaan_masyarakat', label: 'Prioritas Bidang Pemberdayaan Masyarakat', type: 'textarea' },
  { name: 'prioritas_program_bidang_penanggulangan_bencana_darurat_mendesak', label: 'Prioritas Bidang Penanggulangan Bencana', type: 'textarea' },
  { name: 'indikator_kinerja_utama_negeri_rpjmnegeri', label: 'Indikator Kinerja Utama Negeri (KPI)', type: 'textarea' },
  { name: 'pagu_indikatif_rpjmnegeri', label: 'Pagu Indikatif Total RPJMNegeri (Rp)', type: 'number' },
  { name: 'ringkasan_sumber_pendanaan_rpjmnegeri', label: 'Ringkasan Sumber Pendanaan', type: 'textarea' },
  { name: 'lampiran_dokumen_pendukung_rpjmnegeri', label: 'Lampiran Dokumen Pendukung', type: 'textarea' },
  { name: 'tim_penyusun_rpjmnegeri_dan_sk', label: 'Tim Penyusun RPJMNegeri dan No. SK', type: 'textarea' },
  { name: 'catatan_revisi_rpjmnegeri', label: 'Catatan Revisi', type: 'textarea' },
  { name: 'kata_pengantar_rpjmnegeri_narasi', label: 'Narasi Kata Pengantar', type: 'textarea' },
  { name: 'bab1_latar_belakang_konteks_umum', label: 'BAB I: Narasi Latar Belakang & Konteks Umum', type: 'textarea' },
  { name: 'bab1_maksud_tujuan_narasi', label: 'BAB I: Narasi Maksud dan Tujuan', type: 'textarea' },
  { name: 'bab1_dasar_hukum_tambahan', label: 'BAB I: Narasi Dasar Hukum Tambahan', type: 'textarea' },
  { name: 'bab1_tahapan_pembentukan_tim_narasi', label: 'BAB I: Narasi Tahapan Pembentukan Tim', type: 'textarea' },
  { name: 'bab1_tahapan_penyelarasan_arah_kebijakan_narasi', label: 'BAB I: Narasi Tahapan Penyelarasan Arah Kebijakan', type: 'textarea' },
  { name: 'bab1_tahapan_mengkaji_sdgs_narasi', label: 'BAB I: Narasi Tahapan Mengkaji SDGs', type: 'textarea' },
  { name: 'bab1_tahapan_mengkaji_rencana_program_narasi', label: 'BAB I: Narasi Tahapan Mengkaji Rencana Program', type: 'textarea' },
  { name: 'bab1_tahapan_penyusunan_rancangan_narasi', label: 'BAB I: Narasi Tahapan Penyusunan Rancangan', type: 'textarea' },
  { name: 'bab1_tahapan_musrenbang_narasi', label: 'BAB I: Narasi Tahapan Musrenbang', type: 'textarea' },
  { name: 'bab1_tahapan_musnegeri_penetapan_narasi', label: 'BAB I: Narasi Tahapan Musnegeri Penetapan', type: 'textarea' },
  { name: 'bab1_tahapan_sosialisasi_narasi', label: 'BAB I: Narasi Tahapan Sosialisasi', type: 'textarea' },
  { name: 'bab2_sejarah_negeri_narasi', label: 'BAB II: Narasi Sejarah Negeri', type: 'textarea' },
  { name: 'bab2_kondisi_geografis_narasi', label: 'BAB II: Narasi Kondisi Geografis', type: 'textarea' },
  { name: 'bab2_demografi_narasi', label: 'BAB II: Narasi Demografi', type: 'textarea' },
  { name: 'bab2_kesehatan_narasi', label: 'BAB II: Narasi Kesehatan', type: 'textarea' },
  { name: 'bab2_pendidikan_narasi', label: 'BAB II: Narasi Pendidikan', type: 'textarea' },
  { name: 'bab2_mata_pencaharian_narasi', label: 'BAB II: Narasi Mata Pencaharian', type: 'textarea' },
  { name: 'bab2_kesejahteraan_narasi', label: 'BAB II: Narasi Kesejahteraan', type: 'textarea' },
  { name: 'bab2_agama_narasi', label: 'BAB II: Narasi Agama', type: 'textarea' },
  { name: 'bab2_budaya_narasi', label: 'BAB II: Narasi Budaya', type: 'textarea' },
  { name: 'bab2_ekonomi_negeri_narasi', label: 'BAB II: Narasi Ekonomi Negeri', type: 'textarea' },
  { name: 'bab2_infrastruktur_negeri_narasi', label: 'BAB II: Narasi Infrastruktur Negeri', type: 'textarea' },
  { name: 'bab2_pembagian_wilayah_narasi', label: 'BAB II: Narasi Pembagian Wilayah', type: 'textarea' },
  { name: 'bab2_sotk_negeri_narasi', label: 'BAB II: Narasi SOTK Negeri', type: 'textarea' },
  { name: 'bab2_lembaga_bpd_narasi', label: 'BAB II: Narasi Kelembagaan BPD', type: 'textarea' },
  { name: 'bab3_visi_narasi', label: 'BAB III: Narasi Pengantar Visi', type: 'textarea' },
  { name: 'bab3_misi_narasi', label: 'BAB III: Narasi Pengantar Misi', type: 'textarea' },
  { name: 'bab3_nilai_nilai_narasi', label: 'BAB III: Narasi Nilai-Nilai', type: 'textarea' },
  { name: 'bab4_masalah_analisis', label: 'BAB IV: Analisis Masalah', type: 'textarea' },
  { name: 'bab4_potensi_analisis', label: 'BAB IV: Analisis Potensi', type: 'textarea' },
  { name: 'bab5_arah_kebijakan_pembangunan_narasi', label: 'BAB V: Narasi Arah Kebijakan Pembangunan', type: 'textarea' },
  { name: 'bab5_arah_kebijakan_keuangan_narasi', label: 'BAB V: Narasi Arah Kebijakan Keuangan', type: 'textarea' },
  { name: 'bab6_program_kegiatan_narasi_umum', label: 'BAB VI: Narasi Umum Program dan Kegiatan', type: 'textarea' },
  { name: 'bab6_bidang_pemerintahan_narasi', label: 'BAB VI: Narasi Bidang Pemerintahan', type: 'textarea' },
  { name: 'bab6_bidang_pembangunan_narasi', label: 'BAB VI: Narasi Bidang Pembangunan', type: 'textarea' },
  { name: 'bab6_bidang_pembinaan_narasi', label: 'BAB VI: Narasi Bidang Pembinaan', type: 'textarea' },
  { name: 'bab6_bidang_pemberdayaan_narasi', label: 'BAB VI: Narasi Bidang Pemberdayaan', type: 'textarea' },
  { name: 'bab6_bidang_bencana_narasi', label: 'BAB VI: Narasi Bidang Bencana', type: 'textarea' },
  { name: 'bab7_kesimpulan_narasi', label: 'BAB VII: Narasi Kesimpulan', type: 'textarea' },
  { name: 'bab7_saran_narasi', label: 'BAB VII: Narasi Saran Umum', type: 'textarea' },
  { name: 'bab7_saran_tambahan_1', label: 'BAB VII: Saran Tambahan 1', type: 'textarea' },
  { name: 'bab7_saran_tambahan_2', label: 'BAB VII: Saran Tambahan 2', type: 'textarea' },
  { name: 'lampiran_sk_tim_penyusun', label: 'Lampiran: SK Tim Penyusun', type: 'text', placeholder: 'Ya/Tidak/Nama File' },
  { name: 'lampiran_rktl_tim_penyusun', label: 'Lampiran: RKTL Tim Penyusun', type: 'text' },
  { name: 'lampiran_peta_jalan_sdgs', label: 'Lampiran: Peta Jalan SDGs', type: 'text' },
  { name: 'lampiran_data_rencana_program_kegiatan_masuk', label: 'Lampiran: Data Rencana Program Masuk', type: 'text' },
  { name: 'lampiran_gambar_bagan_kelembagaan', label: 'Lampiran: Gambar Bagan Kelembagaan', type: 'text' },
  { name: 'lampiran_daftar_masalah_potensi_bagan_kelembagaan', label: 'Lampiran: Daftar Masalah/Potensi (Bagan)', type: 'text' },
  { name: 'lampiran_gambar_peta_sosial_negeri', label: 'Lampiran: Gambar Peta Sosial', type: 'text' },
  { name: 'lampiran_daftar_masalah_potensi_sketsa_negeri', label: 'Lampiran: Daftar Masalah/Potensi (Sketsa)', type: 'text' },
  { name: 'lampiran_gambar_kalender_musim', label: 'Lampiran: Gambar Kalender Musim', type: 'text' },
  { name: 'lampiran_daftar_masalah_potensi_kalender_musim', label: 'Lampiran: Daftar Masalah/Potensi (Kalender)', type: 'text' },
  { name: 'lampiran_gambar_pohon_masalah', label: 'Lampiran: Gambar Pohon Masalah', type: 'text' },
  { name: 'lampiran_daftar_masalah_potensi_pohon_masalah', label: 'Lampiran: Daftar Masalah/Potensi (Pohon)', type: 'text' },
  { name: 'lampiran_daftar_inventarisir_masalah', label: 'Lampiran: Daftar Inventarisir Masalah', type: 'text' },
  { name: 'lampiran_daftar_inventarisir_potensi', label: 'Lampiran: Daftar Inventarisir Potensi', type: 'text' },
  { name: 'lampiran_pengkajian_tindakan_pemecahan_masalah', label: 'Lampiran: Pengkajian Tindakan Pemecahan Masalah', type: 'text' },
  { name: 'lampiran_penentuan_tindakan_masalah', label: 'Lampiran: Penentuan Tindakan Masalah', type: 'text' },
  { name: 'lampiran_penentuan_peringkat_tindakan', label: 'Lampiran: Penentuan Peringkat Tindakan', type: 'text' },
  { name: 'lampiran_daftar_gagasan_dusun_kelompok', label: 'Lampiran: Daftar Gagasan Dusun/Kelompok', type: 'text' },
  { name: 'lampiran_rekapitulasi_gagasan_dusun_kelompok', label: 'Lampiran: Rekapitulasi Gagasan Dusun/Kelompok', type: 'text' },
  { name: 'lampiran_rancangan_rpjm_negeri', label: 'Lampiran: Rancangan RPJM Negeri', type: 'text' },
  { name: 'lampiran_dokumen_visi_misi_kepala_pemerintahan_negeri', label: 'Lampiran: Visi Misi Kepala Pemerintahan Negeri', type: 'text' },
  { name: 'lampiran_dokumen_pokok_pikiran_bpd', label: 'Lampiran: Pokok Pikiran BPD', type: 'text' },
  { name: 'lampiran_keputusan_tim_penyusun_dll', label: 'Lampiran: Keputusan Tim/Panitia', type: 'text' },
  { name: 'lampiran_berita_acara_musyawarah', label: 'Lampiran: Berita Acara Musyawarah', type: 'text' },
  { name: 'lampiran_undangan_daftar_hadir_musyawarah', label: 'Lampiran: Undangan dan Daftar Hadir Musyawarah', type: 'text' },
  { name: 'lampiran_notulen_musyawarah', label: 'Lampiran: Notulen Musyawarah', type: 'text' },
  { name: 'lampiran_peta_negeri', label: 'Lampiran: Peta Negeri', type: 'text' },
  { name: 'lampiran_foto_kegiatan_negeri', label: 'Lampiran: Foto Kegiatan Negeri', type: 'text' },
  { name: 'keterangan', label: 'Keterangan Umum', type: 'textarea' },
];

export const BUKU_RKP_FIELDS: FieldDefinition[] = [
  { name: 'id_rpjmnegeri_induk', label: 'ID RPJMNegeri Induk', type: 'number', required: true },
  { name: 'tahun_rkp', label: 'Tahun RKP Negeri', type: 'text', required: true, placeholder: 'YYYY' },
  { name: 'bidang_pembangunan', label: 'Bidang Pembangunan', type: 'select', required: true, options: ['Penyelenggaraan Pemerintahan Negeri', 'Pelaksanaan Pembangunan Negeri', 'Pembinaan Kemasyarakatan Negeri', 'Pemberdayaan Masyarakat Negeri', 'Penanggulangan Bencana, Darurat, dan Mendesak'] },
  { name: 'sub_bidang_kegiatan', label: 'Sub-Bidang Kegiatan', type: 'text' },
  { name: 'kegiatan', label: 'Nama Kegiatan', type: 'textarea', required: true },
  { name: 'lokasi_pembangunan', label: 'Lokasi Pembangunan', type: 'text' },
  { name: 'prakiraan_volume', label: 'Prakiraan Volume', type: 'text', placeholder: 'Contoh: 1 Unit, 200 Meter' },
  { name: 'prakiraan_waktu_pelaksanaan', label: 'Waktu Pelaksanaan', type: 'text', placeholder: 'Contoh: Triwulan I, Januari - Maret' },
  { name: 'sumber_dana_direncanakan', label: 'Sumber Dana Direncanakan', type: 'text', placeholder: 'Contoh: DD, ADD' },
  { name: 'pola_pelaksanaan', label: 'Pola Pelaksanaan', type: 'select', options: ['Swakelola', 'Kerjasama Antar Negeri', 'Pihak Ketiga'] },
  { name: 'anggaran', label: 'Pagu Anggaran (Rp)', type: 'number', required: true },
  { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];

export const BUKU_APBNEGERI_FIELDS: FieldDefinition[] = [
  { name: 'id_rkp_induk', label: 'ID RKP Negeri Induk', type: 'number', required: true },
  { name: 'tahun_apbnegeri', label: 'Tahun Anggaran', type: 'text', required: true, placeholder: 'YYYY' },
  { name: 'kode_rekening', label: 'Kode Rekening', type: 'text', required: true },
  { name: 'uraian', label: 'Uraian', type: 'textarea', required: true },
  { name: 'jenis_anggaran', label: 'Jenis Anggaran', type: 'select', options: ['Pendapatan', 'Belanja', 'Pembiayaan'], required: true },
  { name: 'sumber_dana', label: 'Sumber Dana (untuk Pendapatan)', type: 'text', placeholder: 'Contoh: ADD, DD, PANegeri' },
  { name: 'bidang_kegiatan', label: 'Bidang Kegiatan (untuk Belanja)', type: 'select', options: ['Penyelenggaraan Pemerintahan Negeri', 'Pelaksanaan Pembangunan', 'Pembinaan Kemasyarakatan', 'Pemberdayaan Masyarakat', 'Penanggulangan Bencana'] },
  { name: 'jumlah', label: 'Jumlah Anggaran (Rp)', type: 'number', required: true },
  { name: 'volume', label: 'Volume', type: 'text', placeholder: 'Contoh: 1, 100' },
  { name: 'satuan', label: 'Satuan', type: 'text', placeholder: 'Contoh: Unit, Meter' },
  { name: 'harga_satuan', label: 'Harga Satuan (Rp)', type: 'number' },
  { name: 'keterangan', label: 'Keterangan', type: 'textarea' },
];


export const MENU_ITEMS: BookDefinition[] = [
    // Perencanaan
    { key: 'planning_view_placeholder', label: 'Perencanaan Negeri Terpadu', category: BOOK_CATEGORIES.PERENCANAAN_NEGERI, fields: [], icon: PLANNING_ICON }, // Placeholder for main nav
    
    // Pembuat Surat
    { key: PEMBUAT_SURAT_KEY, label: 'Pembuat Surat', category: BOOK_CATEGORIES.PEMBUAT_SURAT, fields: [], icon: <PaperAirplaneIcon className="w-5 h-5"/> },

    // Administrasi Umum
    { key: DATA_NEGERI_KEY, label: 'Data Umum Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: DATA_NEGERI_FIELDS, icon: <BuildingOfficeIcon className="w-5 h-5"/> },
    { key: 'buku_peraturan', label: 'Buku Peraturan Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_PERATURAN_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_keputusan_kepala_pemerintahan_negeri', label: 'Buku Keputusan Kepala Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_KEPUTUSAN_KEPALA_PEMERINTAHAN_NEGERI_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_inventaris', label: 'Buku Inventaris Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_INVENTARIS_FIELDS, icon: <FolderIcon className="w-5 h-5" /> },
    { key: 'buku_aparat', label: 'Buku Aparat Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_APARAT_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_tanah_kas', label: 'Buku Tanah Kas Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_TANAH_FIELDS, icon: <FolderIcon className="w-5 h-5" /> },
    { key: 'buku_tanah_negeri', label: 'Buku Tanah Milik Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_TANAH_FIELDS, icon: <FolderIcon className="w-5 h-5" /> },
    { key: 'buku_agenda_surat_masuk', label: 'Buku Agenda Surat Masuk', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_AGENDA_SURAT_MASUK_FIELDS, icon: <InboxArrowDownIcon className="w-5 h-5" /> },
    { key: 'buku_agenda_surat_keluar', label: 'Buku Agenda Surat Keluar', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_AGENDA_SURAT_KELUAR_FIELDS, icon: <PaperAirplaneIcon className="w-5 h-5" /> },
    { key: 'buku_ekspedisi', label: 'Buku Ekspedisi', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_EKSPEDISI_FIELDS, icon: <ClipboardDocumentListIcon className="w-5 h-5" /> },
    { key: 'buku_lembaran_berita', label: 'Buku Lembaran & Berita Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_LEMBARAN_BERITA_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: USAGE_GUIDE_KEY, label: 'Petunjuk Penggunaan', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: [], icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_tamu_umum', label: 'Buku Tamu Umum Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_TAMU_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_absensi_aparat', label: 'Buku Absensi Aparat Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_UMUM, fields: BUKU_ABSENSI_APARAT_FIELDS, icon: <ClipboardDocumentListIcon className="w-5 h-5" /> },

    // Administrasi Penduduk
    { key: 'buku_induk_penduduk', label: 'Buku Induk Penduduk', category: BOOK_CATEGORIES.ADMINISTRASI_PENDUDUK, fields: BUKU_INDUK_PENDUDUK_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_mutasi_penduduk', label: 'Buku Mutasi Penduduk', category: BOOK_CATEGORIES.ADMINISTRASI_PENDUDUK, fields: BUKU_MUTASI_PENDUDUK_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_rekap_penduduk', label: 'Buku Rekap Jumlah Penduduk', category: BOOK_CATEGORIES.ADMINISTRASI_PENDUDUK, fields: BUKU_REKAP_PENDUDUK_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_penduduk_sementara', label: 'Buku Penduduk Sementara', category: BOOK_CATEGORIES.ADMINISTRASI_PENDUDUK, fields: BUKU_PENDUDUK_SEMENTARA_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_ktp_kk', label: 'Buku Layanan KTP & KK', category: BOOK_CATEGORIES.ADMINISTRASI_PENDUDUK, fields: BUKU_KTP_KK_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },

    // Administrasi Keuangan
    { key: 'buku_apbnegeri', label: 'Buku APBNegeri', category: BOOK_CATEGORIES.ADMINISTRASI_KEUANGAN, fields: BUKU_APBNEGERI_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },
    { key: 'buku_penjabaran_apbnegeri', label: 'Buku Penjabaran APBNegeri', category: BOOK_CATEGORIES.ADMINISTRASI_KEUANGAN, fields: BUKU_PENJABARAN_APBNEGERI_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },
    { key: 'buku_rka', label: 'Buku RKA Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_KEUANGAN, fields: BUKU_RKA_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },
    { key: 'buku_kas_umum', label: 'Buku Kas Umum (BKU)', category: BOOK_CATEGORIES.ADMINISTRASI_KEUANGAN, fields: BUKU_KAS_UMUM_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },
    { key: 'buku_kas_pembantu', label: 'Buku Kas Pembantu Kegiatan', category: BOOK_CATEGORIES.ADMINISTRASI_KEUANGAN, fields: BUKU_KAS_PEMBANTU_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },
    { key: 'buku_bank', label: 'Buku Bank Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_KEUANGAN, fields: BUKU_BANK_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },
    { key: 'buku_panjar', label: 'Buku Kas Panjar', category: BOOK_CATEGORIES.ADMINISTRASI_KEUANGAN, fields: BUKU_PANJAR_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },

    // Administrasi Pembangunan
    { key: 'buku_rpjmnegeri', label: 'Buku RPJMNegeri (Data Entri)', category: BOOK_CATEGORIES.ADMINISTRASI_PEMBANGUNAN, fields: BUKU_RPJMNEGERI_FIELDS, icon: <FolderIcon className="w-5 h-5" /> },
    { key: 'buku_rkp', label: 'Buku RKP Negeri (Data Entri)', category: BOOK_CATEGORIES.ADMINISTRASI_PEMBANGUNAN, fields: BUKU_RKP_FIELDS, icon: <FolderIcon className="w-5 h-5" /> },
    { key: 'buku_kegiatan_pembangunan', label: 'Buku Kegiatan Pembangunan', category: BOOK_CATEGORIES.ADMINISTRASI_PEMBANGUNAN, fields: BUKU_KEGIATAN_PEMBANGUNAN_FIELDS, icon: <BuildingOfficeIcon className="w-5 h-5" /> },
    { key: 'buku_inventaris_hasil', label: 'Buku Inventaris Hasil Pembangunan', category: BOOK_CATEGORIES.ADMINISTRASI_PEMBANGUNAN, fields: BUKU_INVENTARIS_HASIL_FIELDS, icon: <FolderIcon className="w-5 h-5" /> },
    { key: 'buku_kader', label: 'Buku Kader Pemberdayaan Masyarakat', category: BOOK_CATEGORIES.ADMINISTRASI_PEMBANGUNAN, fields: BUKU_KADER_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },

    // Administrasi Lainnya (BPD & Lembaga)
    { key: 'buku_anggota_bpd', label: 'Buku Anggota BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_ANGGOTA_BPD_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_kependudukan_bpd', label: 'Buku Kependudukan Anggota BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_KEPENDUDUKAN_BPD_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_surat_keluar_bpd', label: 'Buku Surat Keluar BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_SURAT_KELUAR_BPD_FIELDS, icon: <PaperAirplaneIcon className="w-5 h-5" /> },
    { key: 'buku_surat_masuk_bpd', label: 'Buku Surat Masuk BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_SURAT_MASUK_BPD_FIELDS, icon: <InboxArrowDownIcon className="w-5 h-5" /> },
    { key: 'buku_ekspedisi_bpd', label: 'Buku Ekspedisi BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_EKSPEDISI_BPD_FIELDS, icon: <ClipboardDocumentListIcon className="w-5 h-5" /> },
    { key: 'buku_data_inventaris_bpd', label: 'Buku Inventaris BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_DATA_INVENTARIS_BPD_FIELDS, icon: <FolderIcon className="w-5 h-5" /> },
    { key: 'buku_laporan_keuangan_bpd', label: 'Buku Laporan Keuangan BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_LAPORAN_KEUANGAN_BPD_FIELDS, icon: <BanknotesIcon className="w-5 h-5" /> },
    { key: 'buku_tamu_bpd', label: 'Buku Tamu BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_TAMU_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
    { key: 'buku_kegiatan_bpd', label: 'Buku Kegiatan BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_KEGIATAN_BPD_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_aspirasi_masyarakat', label: 'Buku Aspirasi Masyarakat (BPD)', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_ASPIRASI_MASYARAKAT_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_absensi_rapat_bpd', label: 'Buku Absensi Rapat BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_ABSENSI_RAPAT_BPD_FIELDS, icon: <ClipboardDocumentListIcon className="w-5 h-5" /> },
    { key: 'buku_notulen_rapat_bpd', label: 'Buku Notulen Rapat BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_NOTULEN_RAPAT_BPD_FIELDS, icon: <ClipboardDocumentListIcon className="w-5 h-5" /> },
    { key: 'buku_peraturan_keputusan_bpd', label: 'Buku Peraturan & Keputusan BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_PERATURAN_KEPUTUSAN_BPD_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_keputusan_musyawarah_bpd', label: 'Buku Keputusan Musyawarah BPD', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_KEPUTUSAN_MUSYAWARAH_BPD_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_keputusan_musyawarah_perencanaan', label: 'Buku Keputusan Musyawarah Perencanaan', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_KEPUTUSAN_MUSYAWARAH_PERENCANAAN_FIELDS, icon: <DocumentTextIcon className="w-5 h-5" /> },
    { key: 'buku_pengurus_lembaga', label: 'Buku Pengurus Lembaga Negeri', category: BOOK_CATEGORIES.ADMINISTRASI_LAINNYA, fields: BUKU_PENGURUS_LEMBAGA_FIELDS, icon: <UsersIcon className="w-5 h-5" /> },
];