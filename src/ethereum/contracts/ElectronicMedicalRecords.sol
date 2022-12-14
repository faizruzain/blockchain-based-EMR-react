// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.17;

contract ContractDeployer {
    struct ContractAddress {
        string name;
        address contractAddress;
    }

    mapping(string => ContractAddress[]) private bunchOfContractAddress;
    address public admin;

    constructor() {
        admin = msg.sender;

        address patient = address(new MedicalRecords(msg.sender));
        bunchOfContractAddress["secret"].push(ContractAddress("MedicalRecords", patient));

        address patientVerificator = address(new PatientVerificator(msg.sender));
        bunchOfContractAddress["secret"].push(ContractAddress("PatientVerificator", patientVerificator));

        address doctorVerificator = address(new DoctorVerificator(msg.sender));
        bunchOfContractAddress["secret"].push(ContractAddress("DoctorVerificator", doctorVerificator));

        address doctorRelation = address(new DoctorRelation(msg.sender));
        bunchOfContractAddress["secret"].push(ContractAddress("DoctorRelation", doctorRelation));

    }

    function getAllContractAddress(string memory _name) public view returns (ContractAddress[] memory data) {
        require(msg.sender == admin);
        return bunchOfContractAddress[_name];
    }
}

contract MedicalRecords {
    struct IdentitasPasien {
        address patientAddress;
        string nama_lengkap;
        uint umur;
        string tanggal_lahir;
        string gender;
    }

    struct RawatJalan {
        address patient_address;
        string jenis; // rawat jalan
        string date_and_time;
        string anamnesis; // mencakup keluhan dan riwat penyakit
        string fisik;
        string diagnosis;
        string rp; // rencana penatalaksanaan
        string pengobatanDanTindakan; // pengobatan dan atau tindakan
        string pelayanan; // pelayanan lain yang telah diberikan kepada pasien
        bool agreement; // persetujuan tindakan bila diperlukan
    }

    struct RawatInap {
        address patient_address;
        string jenis; // rawat inap
        string date_and_time;
        string anamnesis; // mencakup keluhan dan riwat penyakit
        string fisik; // hasil pemeriksaan fisik dan penunjang medik
        string diagnosis;
        string rp; // rencana penatalaksanaan
        string pengobatanDanTindakan; // pengobatan dan atau tindakan
        bool agreement; // persetujuan tindakan bila diperlukan
        string obs; // catatan hasil observasi klinis dan hasil pengobatan
        string ds; // discharge summary / ringkasan pulang
        address doctor; // identitas dokter atau tenaga kesehatan yang memberikan layanan kesehatan
        string pelayanan; // pelayanan lain yang telah diberikan kepada pasien
    }

    struct GawatDarurat {
        address patient_address;
        string jenis; // gawat darurat
        string nama_lengkap;
        string gender;
        string kondisi; // kondisi saat pasien tiba
        string date_and_time;
        string anamnesis; // mencakup keluhan dan riwat penyakit
        string fisik; // hasil pemeriksaan fisik dan penunjang medik
        string diagnosis;
        string pengobatanDanTindakan; // pengobatan dan atau tindakan
        string lc; // ringkasan kondisi pasien sebelum meninggalkan pelayanan unit gawat darurat dan rencana tindak lanjut
        address doctor;
        string transport; // sarana transportasi yang digunakan bagi pasien yang akan dipindahkan ke saran pelayanan kesehatan lain
        string pelayanan;

    }

    struct PengantarPasien {
        address add; // yang diantar
        string pengantar_pasien; //jenis
        string nama_lengkap;
        uint hp; // nomor hanphone
        string hubungan; // hubungan pengantar dengan pasien
    }

    mapping(address => IdentitasPasien) private patientId;
    mapping(address => PengantarPasien) private pengantar_pasien;
    mapping(address => RawatJalan[]) private outPatient;
    mapping(address => RawatInap[]) private inPatient;
    mapping(address => GawatDarurat[]) private emergencyPatient;

    address private admin; 
    DoctorVerificator doctor_verificator;
    PatientVerificator patient_verificator;
    DoctorRelation doctor_relation;

    constructor(address _admin) {
        admin = _admin;
    }

    function setDoctorVerificatorAddress(address _DoctorVerificatorAddress) public {
        doctor_verificator = DoctorVerificator(_DoctorVerificatorAddress);
    }

    function setPatientVerificatorAddress(address _PatientVerificatorAddress) public {
        patient_verificator = PatientVerificator(_PatientVerificatorAddress);
    }

    function setDoctorRelationAddress(address _DoctorRelationAddress) public {
        doctor_relation = DoctorRelation(_DoctorRelationAddress);
    }

    function addOutPatient (IdentitasPasien memory _identitasPasien, RawatJalan memory _rawatjalan) onlyDoctor public {
        IdentitasPasien memory identitasPasien;
        identitasPasien.patientAddress =  _identitasPasien.patientAddress;
        identitasPasien.nama_lengkap =  _identitasPasien.nama_lengkap;
        identitasPasien.umur =  _identitasPasien.umur;
        identitasPasien.tanggal_lahir =  _identitasPasien.tanggal_lahir;
        identitasPasien.gender =  _identitasPasien.gender;

        patientId[_identitasPasien.patientAddress] = identitasPasien;

        RawatJalan memory rawatJalan;
        rawatJalan.patient_address = _rawatjalan.patient_address;
        rawatJalan.jenis = _rawatjalan.jenis;
        rawatJalan.date_and_time = _rawatjalan.date_and_time;
        rawatJalan.anamnesis = _rawatjalan.anamnesis;
        rawatJalan.fisik = _rawatjalan.fisik;
        rawatJalan.diagnosis = _rawatjalan.diagnosis;
        rawatJalan.rp = _rawatjalan.rp;
        rawatJalan.pengobatanDanTindakan = _rawatjalan.pengobatanDanTindakan;
        rawatJalan.pelayanan = _rawatjalan.pelayanan;
        rawatJalan.agreement = _rawatjalan.agreement;

        outPatient[_identitasPasien.patientAddress].push(rawatJalan);

        patient_verificator.addPatient(_identitasPasien.patientAddress);
        doctor_relation.addDoctorRelation(msg.sender, _identitasPasien.nama_lengkap, _rawatjalan.jenis, _identitasPasien.patientAddress);
    }

    function addInPatient(IdentitasPasien memory _identitasPasien, RawatInap memory _rawatInap) onlyDoctor public {
        IdentitasPasien memory identitasPasien;
        identitasPasien.patientAddress =  _identitasPasien.patientAddress;
        identitasPasien.nama_lengkap =  _identitasPasien.nama_lengkap;
        identitasPasien.umur =  _identitasPasien.umur;
        identitasPasien.tanggal_lahir =  _identitasPasien.tanggal_lahir;
        identitasPasien.gender =  _identitasPasien.gender;

        patientId[_identitasPasien.patientAddress] = identitasPasien;

        RawatInap memory rawatInap;
        rawatInap.patient_address = _rawatInap.patient_address;
        rawatInap.jenis = _rawatInap.jenis; 
        rawatInap.date_and_time = _rawatInap.date_and_time;
        rawatInap.anamnesis = _rawatInap.anamnesis; 
        rawatInap.fisik = _rawatInap.fisik; 
        rawatInap.diagnosis = _rawatInap.diagnosis;
        rawatInap.rp = _rawatInap.rp; 
        rawatInap.pengobatanDanTindakan = _rawatInap.pengobatanDanTindakan;
        rawatInap.agreement = _rawatInap.agreement;
        rawatInap.obs = _rawatInap.obs;
        rawatInap.ds = _rawatInap.ds;
        rawatInap.doctor = _rawatInap.doctor;
        rawatInap.pelayanan = _rawatInap.pelayanan;

        inPatient[_rawatInap.patient_address].push(rawatInap);

        patient_verificator.addPatient(_identitasPasien.patientAddress);
        doctor_relation.addDoctorRelation(msg.sender, _identitasPasien.nama_lengkap, _rawatInap.jenis, _identitasPasien.patientAddress);
    }

    function addEmergencyPatient(PengantarPasien memory _pengantar, GawatDarurat memory _gawatDarurat) onlyDoctor public {
        PengantarPasien memory pengantarPasien;
        pengantarPasien.add = _pengantar.add; // yang diantar
        pengantarPasien.pengantar_pasien = _pengantar.pengantar_pasien;
        pengantarPasien.nama_lengkap = _pengantar.nama_lengkap;
        pengantarPasien.hp = _pengantar.hp;
        pengantarPasien.hubungan = _pengantar.hubungan;

        pengantar_pasien[_gawatDarurat.patient_address] = pengantarPasien;

        GawatDarurat memory gawatDarurat;
        gawatDarurat.patient_address = _gawatDarurat.patient_address;
        gawatDarurat.jenis = _gawatDarurat.jenis;
        gawatDarurat.nama_lengkap = _gawatDarurat.nama_lengkap;
        gawatDarurat.gender = _gawatDarurat.gender;
        gawatDarurat.kondisi = _gawatDarurat.kondisi;
        gawatDarurat.date_and_time = _gawatDarurat.date_and_time;
        gawatDarurat.anamnesis = _gawatDarurat.anamnesis;
        gawatDarurat.fisik = _gawatDarurat.fisik;
        gawatDarurat.diagnosis = _gawatDarurat.diagnosis;
        gawatDarurat.pengobatanDanTindakan = _gawatDarurat.pengobatanDanTindakan;
        gawatDarurat.lc = _gawatDarurat.lc;
        gawatDarurat.doctor = _gawatDarurat.doctor;
        gawatDarurat.transport = _gawatDarurat.transport;
        gawatDarurat.pelayanan = _gawatDarurat.pelayanan;

        emergencyPatient[_gawatDarurat.patient_address].push(gawatDarurat);

        patient_verificator.addPatient(_gawatDarurat.patient_address);
        doctor_relation.addDoctorRelation(msg.sender, _gawatDarurat.nama_lengkap, _gawatDarurat.jenis, _gawatDarurat.patient_address);
    }

    function getOutPatient(address add) onlyDoctor public view returns(IdentitasPasien memory a, RawatJalan[] memory b) {
        return (patientId[add], outPatient[add]);
    }

    function getInPatient(address add) onlyDoctor public view returns(IdentitasPasien memory a, RawatInap[] memory b) {
        return (patientId[add], inPatient[add]);
    }

    function getEmergencyPatient(address add) onlyDoctor public view returns(PengantarPasien memory a, GawatDarurat[] memory b) {
        return (pengantar_pasien[add], emergencyPatient[add]);
    }

    modifier onlyDoctor() {
        require(doctor_verificator.verify(msg.sender));
        _;
    }

    modifier onlyDoctorOrPatient() {
        require(doctor_verificator.verify(msg.sender) || patient_verificator.verify(msg.sender));
        _;
    }
}

contract PatientVerificator {

    address private admin;
    address[] private patients;

    mapping(address => bool) private patient; //boolean

    constructor(address _admin) {
        admin = _admin;
    }

    function addPatient(address _address) public {
        if (!patient[_address]) {
            patient[_address] = true;
            patients.push(_address); 
        }
    }

    function verify(address _address) public view returns(bool _bool) {
        if(patient[_address]) {
            return true;
        } else {
            return false;
        }
    }

    function getAllPatients() onlyAdmin public view returns(address[] memory _address) {
        return patients;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }
}

contract DoctorVerificator {

    address private admin;
    address[] private doctors;

    mapping(address => bool) private doctor; //boolean

    constructor(address _admin) {
        admin = _admin;
    }

    function addDoctor(address _address) onlyAdmin public {
        require(!doctor[_address]);      
        doctor[_address] = true;
        doctors.push(_address);      
    }

    function verify(address _address) public view returns(bool _bool) {
        if(doctor[_address]) {
            return true;
        } else {
            return false;
        }
    }

    function getAllDoctors() onlyAdmin public view returns(address[] memory _address) {
        return doctors;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }
}

contract DoctorRelation {
    address admin;

    struct Patient {
        string name;
        string jenis;
        address add;
    }

    mapping(address => Patient[]) private relatedPatien;

    DoctorVerificator doctor_verificator;

    constructor(address _admin) {
        admin = _admin;
    }

    function setDoctorVerificatorAddress(address _DoctorVerificatorAddress) public {
        require(msg.sender == admin);
        doctor_verificator = DoctorVerificator(_DoctorVerificatorAddress);
    }

    function addDoctorRelation(address _doctor, string memory _fullname, string memory _jenis, address _add) onlyDoctor(_doctor) public {
        Patient memory patient;
        patient.name = _fullname;
        patient.jenis = _jenis;
        patient.add = _add;
        relatedPatien[_doctor].push(patient);
    }

    function getDoctorRelations(address _doctor) public view onlyDoctor(msg.sender) returns(Patient[] memory) {
        return relatedPatien[_doctor];
    }

    modifier onlyDoctor(address _doctor) {
        require(doctor_verificator.verify(_doctor));
        _;
    }
}