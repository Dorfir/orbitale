/********************************/
/* Configuration de la maquette */
/********************************/

/* Déclaration des variables globales */
var lib = {};
var canvas, parent_container, stage, exportRoot, imgName, arrayLength, nbrLoaded = 0, scaleStage = 1;
var firstLoad = true;

// angelotti, bouygues, caimmo, eiffage, nacarat, marignan, gambetta, alsei
var promoteur = "";
var nom_residence = "Résidence Nymphéa";
var subnom_residence = "92000 Asnières-sur-Seine";
var etages_noms = ["BAS", "R0", "R1", "R2", "R3", "R4", "R5", "BAS_NUIT", "HAUT_NUIT", "HAUT", "HAUT_JUIN_09", "HAUT_JUIN_12", "HAUT_JUIN_18", "HAUT_DECEMBRE_09", "HAUT_DECEMBRE_12", "HAUT_DECEMBRE_16", "GOOGLE"];
var etages_display_noms = ["BAS", "RDC", "R+1", "R+2", "R+3", "R+4", "R+5", "BAS NUIT", "HAUT NUIT", "HAUT", "", "", "", "", "", "", "In Situ"];
var etages_type = ["BAS", "NIVEAU", "NIVEAU", "NIVEAU", "NIVEAU", "NIVEAU", "NIVEAU", "NUIT", "NUIT", "HAUT", "SOLEIL", "SOLEIL", "SOLEIL", "SOLEIL", "SOLEIL", "SOLEIL", "IN_SITU"];
var etages = [];
var etages_niveau_count = 0;
var etagesLoaded = [];
var ensoleillement_description = [];
var ensoleillement_selection = { month: 0, hour: 1 };
var listHautLD = [], listBasLD = [], listEtagesLD = [];
var listHautHD = [], listBasHD = [], listEtagesHD = [];
var canvas_rect = { 'x': 0, 'y': 0, 'w': 0, 'h': 0 };


var T1Panel, T2Panel, T3Panel, T4Panel, T5Panel, T6Panel, panelOpen = false;
var imgPlan, currentPlan = null, isSocial = true, uriPDF = "", openLightbox = false;
var lots, social;
var theFrameInFullscreen = false;
let isIpad = /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
var ldi;

var is_mode_nuit_active = false;
var is_btn_fullscreen_visible = true;
var is_btn_ensoleillement_visible = true;
var is_btn_mode_nuit_visible = true;
var is_btn_in_situ_visible = true;
var is_btn_haut_visible = true;
var is_btn_bas_visible = true;

var is_cartouche_visible = false;

var texte_menu_gauche = false;
var close_cross_on_galerie = false;
var is_galerie_active = true;
var is_video_active = true;

var is_price_visible = true;

var tri_liste_typos_selected = [];
var tri_liste_specific_selected = [];
var tri_liste_exterieurs_selected = [];
var superficie_selected = [5, 105];
var prix_selected = [45000, 400000];
var tri_selection_actuel = null;

var tri_fiche_recap_first_display = true;
var current_fiche_result_cellule_index = 0;
var current_fiche_result_aerien_index = 0;

var hide_panel_on_mobile = true;

/* Click element on stage */
var clicked_object = null;

/* Configuration PDV */
var pdv_pas_de_plan = "./assets/no_pdv.jpg";
var pdv_vignette_folder = "./PDV/Vignettes/LD/";
var pdv_folder = "./PDV/";
var pdv_vignette_size = newRect(0, 0, 238, 168);

/* Tailles des éléments */
var imageLD = newRect(0, 0, 720, 405);
var imageHD = newRect(0, 0, 2560, 1440);
var initialeSize = newRect(0, 0, 1920, 1080);
var canvasSize = newRect(0, 0, 1920, 1080);
var documentSize = newRect(0, 0, 1920, 1080);
var parentSize = newRect(0, 0, 1280, 830);
var movedAxo = newVector2D(0, 0);
var clickedPos = newVector2D(0, 0);
var originAxo = newVector2D(0, 0);
var offsetPanel = newVector2D(-960, -540);
var offsetPanelNoZone = newVector2D(-960, -540);
// var offsetPanelNoZone = newVector2D(0,0);
var arrangePanel = newVector2D(0, 0);

/* Graphic puces */
var rayonCircle = 12;
var epaisseurCroix = 0.75;
var tailleCroix = 5;

/* Etiquette des lots en HTML */
var isEtiquetteHTML = false;

/* Graphic etiquettes lots */
var decalPuce = newVector2D(0, 0);
var puceSize = newRect(0, 0, 60, 28);
var roundedCorner = 10;

/* Gestion Flux */
var fluxLotsActif = false;
var fluxLotsResidence = "nomResidence";
var fluxLotsParser = "Adresse_parser.php";
var fluxLoaded = false;
var flux = null;
var lots_saved;



/* Application */
var applicationEmbed = false;
var allowFullScreen = true;
var applicationFromLocalStorage = (window.location.protocol.includes("file"));


/* Etage & frame de départ */
var currentEtage = "R5";
var currentFrame = 32;
var imageMin = 0;
var imageMax = 35;
var borne = 5;
var zoomValue = 1.0;
var zoomMin = 1.0;
var zoomMax = 1.5;
var pasZoom = 0.1;
var pinchValue = 1.0;
var mouseClicked = 2;
var mouseOut = 0;

var roseStartAngle = 32;
var roseAngle = roseStartAngle;
var pasAngle = 10;

var T1view = true;
var T2view = true;
var T3view = true;
var T4view = true;
var T5view = true;
var T6view = true;

var T1 = true;
var T2 = true;
var T3 = true;
var T4 = true;
var T5 = true;
var T6 = true;

// Themes couleurs
var colorT1 = '#7196B9';
var colorT2 = '#C68886';
var colorT3 = '#D8C481';
var colorT4 = '#796756';
var colorT5 = '#78CAED';
var colorT6 = '#0d2b62';
var colorROOM = '#C60000';
var colorSocial = '#999999';


var hideSocialArea = false;


var positionBT = [
	newVector2D(118.1, -76.65),
	newVector2D(195.7, -76.65),
	newVector2D(283.3, -76.65),
	newVector2D(370.9, -76.65)
];

var deplace = true; /* Active deplacement sur zoom */

var cw = true; /* Sens de rotation */
var cwRose = true;

var affichageNomLots = false; /* Affichage nom lots */
var planSitu = false; /* Affichage Situation */
var affPDF = false; /* Bouton pdf */
var affSolen = false; /* Bouton Solen */
var prefix_solen = "";

var displayIsMobile = false;

var swiper;

//Define Types
social = [];


var container_size = { 'width': 0, 'height': 0 };
var canvas_ratio = 1.77777;



/* Module de tri */
var isTriActif = true;

var tri_selection = null;
var tri_lots_clean = null;
var tri_lots_favoris = null;
var tri_liste_typos = null, tri_liste_typo_selected = new Array();
var tri_liste_typos_occurences = null;
var tri_liste_exterieur = null, tri_liste_exterieur_selected = new Array();
var tri_liste_specific = null, tri_liste_specific_selected = new Array();
var tri_is_surface_defined = false;
var tri_surface_min = 0, tri_surface_max = 0;
var tri_surface_min_selected = 0, tri_surface_max_selected = 0;
var tri_selector_container = null;
var tri_table_container = null;
var tri_table_plan_mouseup_partial_propagation = false;
var tri_table_scroll_active = false;
var tri_table_scroll_old_pos = null;
var tri_scroll_is_moving = false;
var tri_table_is_scrollable = false;
var tri_table_overlay_mousedown_interval = null;
var tri_panel_width = '20.83';
var tri_table_favoris_is_displayed = false;
var tri_favoris_zip = null;





/* *************************************/
/*    Liste des images à précharger    */
/* *************************************/
etages = new Object();
etages_noms.forEach(function (etage_name, etage_index) {
	etages[etage_name] = {
		"prefix": etage_name,
		"easeljs_elem": null,
		"easeljs_anim": null,
		"listLD": [],
		"listHD": [],
		"LD_loaded": false,
		"nom_affichage": etages_display_noms[etage_index],
		"etage_type": etages_type[etage_index]
	};
});
for (let etage_name in etages) {
	let etage = etages[etage_name];
	for (let i = 0; i <= 35; i++) {
		etage.listLD.push({ src: "images/LD/" + etage.prefix + "_" + formatNumber(i, 3) + ".jpg", html_id: etage.prefix + "_" + formatNumber(i, 3) });
		etage.listHD.push({ src: "images/HD/" + etage.prefix + "_" + formatNumber(i, 3) + ".jpg", html_id: etage.prefix + "_" + formatNumber(i, 3), preload: new Image() });
		$('#preload_images').append('<img id="preload_' + etage.prefix + "_" + formatNumber(i, 3) + '" src=""/>');
	}
};
etages_niveau_count = etages_type.filter(function (type) { return type == "NIVEAU" }).length;



//defineVariables();
function defineVariables() {

	swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	/************************/
	/* Injection des étages */
	/************************/
	for (let etage_name in etages) {
		let etage = etages[etage_name];
		etage.easeljs_elem = exportRoot.Axo['Axo_' + etage.prefix];
		etage.easeljs_anim = exportRoot.Axo['Axo_' + etage.prefix][etage.prefix];
	};


	/**************************/
	/* Configuration des Lots */
	/**************************/
	lots = [
		{ id: "0", nom: "A001", type: "ROOM", cat: "std", surface: "34.1", niveau: "R0", social: false, cellule: "Hall_01", exterieur: "", batiment: "A", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R0.PlanBT1, coord: APPT_001, appt: null, puce: null, hidden: false, pdf: "HALL", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: null, specific: "", favori: 1 },
		{ id: "1", nom: "A002", type: "T1", cat: "std", surface: "34.1", niveau: "R0", social: false, cellule: "T1", exterieur: "", 		batiment: "A", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R0.PlanBT2, coord: APPT_002, appt: null, puce: null, hidden: false, pdf: "A002", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "BRS", favori: 0 },
		{ id: "2", nom: "A003", type: "T3", cat: "std", surface: "62.8", niveau: "R0", social: false, cellule: "T3", exterieur: "terrasse", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R0.PlanBT3, coord: APPT_003, appt: null, puce: null, hidden: false, pdf: "A003", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "handicap", favori: 0 },

		{ id: "3", nom: "A101", type: "T3", cat: "std", surface: "62.8", niveau: "R1", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R1.PlanBT1, coord: APPT_101, appt: null, puce: null, hidden: false, pdf: "A101", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "BRS handicap", favori: 1 },
		{ id: "4", nom: "A102", type: "T3", cat: "std", surface: "62.8", niveau: "R1", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R1.PlanBT2, coord: APPT_102, appt: null, puce: null, hidden: false, pdf: "A102", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "5", nom: "A103", type: "T2", cat: "std", surface: "40.5", niveau: "R1", social: false, cellule: "T2", exterieur: "", 		batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R1.PlanBT3, coord: APPT_103, appt: null, puce: null, hidden: false, pdf: "A103", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "6", nom: "A104", type: "T2", cat: "std", surface: "42.9", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R1.PlanBT4, coord: APPT_104, appt: null, puce: null, hidden: false, pdf: "A104", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "7", nom: "A105", type: "T2", cat: "std", surface: "42.9", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R1.PlanBT5, coord: APPT_105, appt: null, puce: null, hidden: false, pdf: "A105", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "8", nom: "A106", type: "T2", cat: "std", surface: "42.9", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R1.PlanBT6, coord: APPT_106, appt: null, puce: null, hidden: false, pdf: "A106", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "9", nom: "A107", type: "T2", cat: "std", surface: "42.9", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R1.PlanBT7, coord: APPT_107, appt: null, puce: null, hidden: false, pdf: "A107", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "10", nom: "A108", type: "T1", cat: "std", surface: "34.1", niveau: "R1", social: false, cellule: "T1", exterieur: "", 		batiment: "A", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: "34.1", cell: exportRoot.Axo.Axo_R1.PlanBT8, coord: APPT_108, appt: null, puce: null, hidden: false, pdf: "A108", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "11", nom: "A109", type: "T3", cat: "std", surface: "62.8", niveau: "R1", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "62.8", cell: exportRoot.Axo.Axo_R1.PlanBT9, coord: APPT_109, appt: null, puce: null, hidden: false, pdf: "A109", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "12", nom: "A110", type: "T1", cat: "std", surface: "34.1", niveau: "R1", social: false, cellule: "T1", exterieur: "", 		batiment: "A", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: "34.1", cell: exportRoot.Axo.Axo_R1.PlanBT10, coord: APPT_110, appt: null, puce: null, hidden: false, pdf: "A110", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "13", nom: "A111", type: "T3", cat: "std", surface: "62.8", niveau: "R1", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "62.8", cell: exportRoot.Axo.Axo_R1.PlanBT11, coord: APPT_111, appt: null, puce: null, hidden: false, pdf: "A111", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "14", nom: "B101", type: "T2", cat: "std", surface: "50.4", niveau: "R1", social: false, cellule: "T2", exterieur: "", 		batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R1.PlanBT12, coord: APPT_112, appt: null, puce: null, hidden: false, pdf: "B101", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "15", nom: "B102", type: "T3", cat: "std", surface: "69.6", niveau: "R1", social: false, cellule: "T3", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "12.5", cell: exportRoot.Axo.Axo_R1.PlanBT13, coord: APPT_113, appt: null, puce: null, hidden: false, pdf: "B102", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "16", nom: "B103", type: "T4", cat: "std", surface: "83.3", niveau: "R1", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 1, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R1.PlanBT14, coord: APPT_114, appt: null, puce: null, hidden: false, pdf: "B103", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "17", nom: "B104", type: "T2", cat: "std", surface: "52.5", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R1.PlanBT15, coord: APPT_115, appt: null, puce: null, hidden: false, pdf: "B104", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 1 },
		{ id: "18", nom: "B105", type: "T2", cat: "std", surface: "52.5", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R1.PlanBT16, coord: APPT_116, appt: null, puce: null, hidden: false, pdf: "B105", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "19", nom: "B106", type: "T1", cat: "std", surface: "29.8", niveau: "R1", social: false, cellule: "T1", exterieur: "", 		batiment: "B", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R1.PlanBT17, coord: APPT_117, appt: null, puce: null, hidden: false, pdf: "B106", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "20", nom: "B107", type: "T2", cat: "std", surface: "52.5", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R1.PlanBT18, coord: APPT_118, appt: null, puce: null, hidden: false, pdf: "B107", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "21", nom: "B108", type: "T4", cat: "std", surface: "83.3", niveau: "R1", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 1, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R1.PlanBT19, coord: APPT_119, appt: null, puce: null, hidden: false, pdf: "B108", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "22", nom: "B109", type: "T2", cat: "std", surface: "52.5", niveau: "R1", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R1.PlanBT20, coord: APPT_120, appt: null, puce: null, hidden: false, pdf: "B109", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },

		{ id: "23", nom: "A201", type: "T3", cat: "std", surface: "62.8", niveau: "R2", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R2.PlanBT1, coord: APPT_201, appt: null, puce: null, hidden: false, pdf: "A201", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "24", nom: "A202", type: "T3", cat: "std", surface: "62.8", niveau: "R2", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R2.PlanBT2, coord: APPT_202, appt: null, puce: null, hidden: false, pdf: "A202", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "25", nom: "A203", type: "T2", cat: "std", surface: "40.5", niveau: "R2", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R2.PlanBT3, coord: APPT_203, appt: null, puce: null, hidden: false, pdf: "A203", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "26", nom: "A204", type: "T2", cat: "std", surface: "42.9", niveau: "R2", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R2.PlanBT4, coord: APPT_204, appt: null, puce: null, hidden: false, pdf: "A204", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "27", nom: "A205", type: "T2", cat: "std", surface: "42.9", niveau: "R2", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R2.PlanBT5, coord: APPT_205, appt: null, puce: null, hidden: false, pdf: "A205", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "28", nom: "A206", type: "T2", cat: "std", surface: "42.9", niveau: "R2", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R2.PlanBT6, coord: APPT_206, appt: null, puce: null, hidden: false, pdf: "A206", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "29", nom: "A207", type: "T2", cat: "std", surface: "42.9", niveau: "R2", social: false, cellule: "T2", exterieur: "", 		batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R2.PlanBT7, coord: APPT_207, appt: null, puce: null, hidden: false, pdf: "A207", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 1 },
		{ id: "30", nom: "A208", type: "T1", cat: "std", surface: "34.1", niveau: "R2", social: false, cellule: "T1", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: "34.1", cell: exportRoot.Axo.Axo_R2.PlanBT8, coord: APPT_208, appt: null, puce: null, hidden: false, pdf: "A208", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "31", nom: "A209", type: "T3", cat: "std", surface: "62.8", niveau: "R2", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R2.PlanBT9, coord: APPT_209, appt: null, puce: null, hidden: false, pdf: "A209", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "32", nom: "A210", type: "T2", cat: "std", surface: "42.9", niveau: "R2", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R2.PlanBT10, coord: APPT_210, appt: null, puce: null, hidden: false, pdf: "A210", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "33", nom: "A211", type: "T3", cat: "std", surface: "62.8", niveau: "R2", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R2.PlanBT11, coord: APPT_211, appt: null, puce: null, hidden: false, pdf: "A211", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "34", nom: "B201", type: "T2", cat: "std", surface: "50.4", niveau: "R2", social: false, cellule: "T2", exterieur: "", 		batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R2.PlanBT12, coord: APPT_212, appt: null, puce: null, hidden: false, pdf: "B201", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "35", nom: "B202", type: "T3", cat: "std", surface: "69.6", niveau: "R2", social: false, cellule: "T3", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "12.5", cell: exportRoot.Axo.Axo_R2.PlanBT13, coord: APPT_213, appt: null, puce: null, hidden: false, pdf: "B202", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "36", nom: "B203", type: "T4", cat: "std", surface: "83.3", niveau: "R2", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 1, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R2.PlanBT14, coord: APPT_214, appt: null, puce: null, hidden: false, pdf: "B203", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "37", nom: "B204", type: "T3", cat: "std", surface: "69.6", niveau: "R2", social: false, cellule: "T3", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "12.5", cell: exportRoot.Axo.Axo_R2.PlanBT15, coord: APPT_215, appt: null, puce: null, hidden: false, pdf: "B204", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "38", nom: "B205", type: "T1", cat: "std", surface: "29.8", niveau: "R2", social: false, cellule: "T1", exterieur: "", 		batiment: "B", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R2.PlanBT16, coord: APPT_216, appt: null, puce: null, hidden: false, pdf: "B205", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "39", nom: "B206", type: "T4", cat: "std", surface: "83.3", niveau: "R2", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 1, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R2.PlanBT17, coord: APPT_217, appt: null, puce: null, hidden: false, pdf: "B206", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "40", nom: "B207", type: "T4", cat: "std", surface: "83.3", niveau: "R2", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 1, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R2.PlanBT18, coord: APPT_218, appt: null, puce: null, hidden: false, pdf: "B207", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "41", nom: "B208", type: "T2", cat: "std", surface: "52.5", niveau: "R2", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R2.PlanBT19, coord: APPT_219, appt: null, puce: null, hidden: false, pdf: "B208", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },

		{ id: "42", nom: "A301", type: "T3", cat: "std", surface: "62.8", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R3.PlanBT1, coord: APPT_301, appt: null, puce: null, hidden: false, pdf: "A301", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "43", nom: "A302", type: "T3", cat: "std", surface: "62.8", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R3.PlanBT2, coord: APPT_302, appt: null, puce: null, hidden: false, pdf: "A302", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 1 },
		{ id: "44", nom: "A303", type: "T3", cat: "std", surface: "62.8", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R3.PlanBT3, coord: APPT_303, appt: null, puce: null, hidden: false, pdf: "A303", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "45", nom: "A304", type: "T3", cat: "std", surface: "62.8", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R3.PlanBT4, coord: APPT_304, appt: null, puce: null, hidden: false, pdf: "A304", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "46", nom: "A305", type: "T2", cat: "std", surface: "42.9", niveau: "R3", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R3.PlanBT5, coord: APPT_305, appt: null, puce: null, hidden: false, pdf: "A305", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "47", nom: "A306", type: "T2", cat: "std", surface: "42.9", niveau: "R3", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R3.PlanBT6, coord: APPT_306, appt: null, puce: null, hidden: false, pdf: "A306", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "48", nom: "A307", type: "T1", cat: "std", surface: "34.1", niveau: "R3", social: false, cellule: "T1", exterieur: "", 		batiment: "A", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R3.PlanBT7, coord: APPT_307, appt: null, puce: null, hidden: false, pdf: "A307", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "49", nom: "A308", type: "T3", cat: "std", surface: "62.8", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R3.PlanBT8, coord: APPT_308, appt: null, puce: null, hidden: false, pdf: "A308", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "50", nom: "A309", type: "T2", cat: "std", surface: "42.9", niveau: "R3", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R3.PlanBT9, coord: APPT_309, appt: null, puce: null, hidden: false, pdf: "A309", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "51", nom: "A310", type: "T3", cat: "std", surface: "62.8", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R3.PlanBT10, coord: APPT_310, appt: null, puce: null, hidden: false, pdf: "A310", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "52", nom: "B301", type: "T2", cat: "std", surface: "50.4", niveau: "R3", social: false, cellule: "T2", exterieur: "", 		batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R3.PlanBT11, coord: APPT_311, appt: null, puce: null, hidden: false, pdf: "B301", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "53", nom: "B302", type: "T3", cat: "std", surface: "69.6", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "12.5", cell: exportRoot.Axo.Axo_R3.PlanBT12, coord: APPT_312, appt: null, puce: null, hidden: false, pdf: "B302", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "54", nom: "B303", type: "T4", cat: "std", surface: "83.3", niveau: "R3", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R3.PlanBT13, coord: APPT_313, appt: null, puce: null, hidden: false, pdf: "B303", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "55", nom: "B304", type: "T3", cat: "std", surface: "69.6", niveau: "R3", social: false, cellule: "T3", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "12.5", cell: exportRoot.Axo.Axo_R3.PlanBT14, coord: APPT_314, appt: null, puce: null, hidden: false, pdf: "B304", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "56", nom: "B305", type: "T1", cat: "std", surface: "29.8", niveau: "R3", social: false, cellule: "T1", exterieur: "", 		batiment: "B", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R3.PlanBT15, coord: APPT_315, appt: null, puce: null, hidden: false, pdf: "B305", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "57", nom: "B306", type: "T4", cat: "std", surface: "83.3", niveau: "R3", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R3.PlanBT16, coord: APPT_316, appt: null, puce: null, hidden: false, pdf: "B306", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "58", nom: "B307", type: "T4", cat: "std", surface: "83.3", niveau: "R3", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R3.PlanBT17, coord: APPT_317, appt: null, puce: null, hidden: false, pdf: "B307", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "59", nom: "B308", type: "T2", cat: "std", surface: "52.5", niveau: "R3", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R3.PlanBT18, coord: APPT_318, appt: null, puce: null, hidden: false, pdf: "B308", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },

		{ id: "60", nom: "A401", type: "T3", cat: "std", surface: "62.8", niveau: "R4", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R4.PlanBT1, coord: APPT_401, appt: null, puce: null, hidden: false, pdf: "A401", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "61", nom: "A402", type: "T4", cat: "std", surface: "86.1", niveau: "R4", social: false, cellule: "T4", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "25.5", cell: exportRoot.Axo.Axo_R4.PlanBT2, coord: APPT_402, appt: null, puce: null, hidden: false, pdf: "A402", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "62", nom: "A403", type: "T3", cat: "std", surface: "62.8", niveau: "R4", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R4.PlanBT3, coord: APPT_403, appt: null, puce: null, hidden: false, pdf: "A403", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "63", nom: "A404", type: "T2", cat: "std", surface: "42.9", niveau: "R4", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R4.PlanBT4, coord: APPT_404, appt: null, puce: null, hidden: false, pdf: "A404", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "64", nom: "A405", type: "T2", cat: "std", surface: "42.9", niveau: "R4", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R4.PlanBT5, coord: APPT_405, appt: null, puce: null, hidden: false, pdf: "A405", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "65", nom: "A406", type: "T1", cat: "std", surface: "34.1", niveau: "R4", social: false, cellule: "T1", exterieur: "", 		batiment: "A", orientation: "Toutes expositions", nbre_chambres: null, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R4.PlanBT6, coord: APPT_406, appt: null, puce: null, hidden: false, pdf: "A406", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 60000, specific: "", favori: 0 },
		{ id: "66", nom: "A407", type: "T3", cat: "std", surface: "62.8", niveau: "R4", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R4.PlanBT7, coord: APPT_407, appt: null, puce: null, hidden: false, pdf: "A407", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "67", nom: "A408", type: "T2", cat: "std", surface: "42.9", niveau: "R4", social: false, cellule: "T2", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "9.3", cell: exportRoot.Axo.Axo_R4.PlanBT8, coord: APPT_408, appt: null, puce: null, hidden: false, pdf: "A408", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "68", nom: "A409", type: "T3", cat: "std", surface: "62.8", niveau: "R4", social: false, cellule: "T3", exterieur: "balcon", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R4.PlanBT9, coord: APPT_409, appt: null, puce: null, hidden: false, pdf: "A409", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "69", nom: "B401", type: "T2", cat: "std", surface: "50.4", niveau: "R4", social: false, cellule: "T2", exterieur: "", 		batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: null, cell: exportRoot.Axo.Axo_R4.PlanBT10, coord: APPT_410, appt: null, puce: null, hidden: false, pdf: "B401", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
		{ id: "70", nom: "B402", type: "T4D", cat: "std", surface: "83.8", niveau: "R4", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: exportRoot.Axo.Axo_R4.PlanBT11, coord: APPT_411_BAS, appt: null, puce: null, hidden: false, pdf: "B402", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "71", nom: "B403", type: "T4B", cat: "std", surface: "83.3", niveau: "R4", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R4.PlanBT12, coord: APPT_412, appt: null, puce: null, hidden: false, pdf: "B403", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "72", nom: "B404", type: "T5D", cat: "std", surface: "101.2", niveau: "R4", social: false, cellule: "T5", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 4, nbre_sdb: 2, surface_annexe: "37.5", cell: exportRoot.Axo.Axo_R4.PlanBT13, coord: APPT_413_BAS, appt: null, puce: null, hidden: false, pdf: "B404", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 160000, specific: "", favori: 0 },
		{ id: "73", nom: "B405", type: "T4D", cat: "std", surface: "83.8", niveau: "R4", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: exportRoot.Axo.Axo_R4.PlanBT14, coord: APPT_414_BAS, appt: null, puce: null, hidden: false, pdf: "B405", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "74", nom: "B406", type: "T4D", cat: "std", surface: "83.8", niveau: "R4", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: exportRoot.Axo.Axo_R4.PlanBT15, coord: APPT_415_BAS, appt: null, puce: null, hidden: false, pdf: "B406", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "75", nom: "B407", type: "T4", cat: "std", surface: "83.3", niveau: "R4", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R4.PlanBT16, coord: APPT_416, appt: null, puce: null, hidden: false, pdf: "B407", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "76", nom: "B408", type: "T2", cat: "std", surface: "52.5", niveau: "R4", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R4.PlanBT17, coord: APPT_417, appt: null, puce: null, hidden: false, pdf: "B408", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },

		{ id: "77", nom: "B402", type: "T4D", cat: "std", surface: "83.8", niveau: "R5", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: exportRoot.Axo.Axo_R5.PlanBT1, coord: APPT_411_HAUT, appt: null, puce: null, hidden: false, pdf: "B402", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "78", nom: "B404", type: "T5D", cat: "std", surface: "101.2", niveau: "R5", social: false, cellule: "T5", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 4, nbre_sdb: 2, surface_annexe: "37.5", cell: exportRoot.Axo.Axo_R5.PlanBT2, coord: APPT_413_HAUT, appt: null, puce: null, hidden: false, pdf: "B404", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 160000, specific: "", favori: 0 },
		{ id: "79", nom: "B405", type: "T4D", cat: "std", surface: "83.8", niveau: "R5", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: exportRoot.Axo.Axo_R5.PlanBT3, coord: APPT_414_HAUT, appt: null, puce: null, hidden: false, pdf: "B405", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "80", nom: "B406", type: "T4D", cat: "std", surface: "83.8", niveau: "R5", social: false, cellule: "T4", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: exportRoot.Axo.Axo_R5.PlanBT4, coord: APPT_415_HAUT, appt: null, puce: null, hidden: false, pdf: "B406", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },

		{ id: "81", nom: "A501", type: "T3", cat: "std", surface: "62.8", niveau: "R5", social: false, cellule: "T3 T4", exterieur: "balcon", batiment: "A", orientation: "Sud-est",           nbre_chambres: 2, nbre_sdb: 1, surface_annexe: "21.6", cell: exportRoot.Axo.Axo_R5.PlanBT5, coord: APPT_501, appt: null, puce: null, hidden: false, pdf: "A501", visite360: "https://www.visiolab.fr/Visite360/LP_Promotion/ChatenayMalabry/T3/", aerien: "Jardin_R2_A206 Jardin_R2_A205", aerien360: "https://www.visiolab.fr/Panorama/Marignan/toulouse/allee_gloria/pano_etages/", cellule_axo: "cellule_axo_1", prix: 120000, specific: "", favori: 1 },
		// { id: "82", nom: "A502", type: "T4", cat: "std", surface: "83.8", niveau: "R5", social: false, cellule: "T4", exterieur: "terrasse", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: exportRoot.Axo.Axo_R5.PlanBT6, coord: APPT_502, appt: null, puce: null, hidden: false, pdf: "A502", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: "cellule_axo_2", prix: 140000, specific: "", favori: 0 },
		{ id: "82", nom: "A502", type: "T4", cat: "nozone", surface: "83.8", niveau: "R5", social: false, cellule: "T4", exterieur: "terrasse", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "43.8", cell: null, coord: APPT_502, appt: null, puce: null, hidden: false, pdf: "A502", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: "cellule_axo_2", prix: 140000, specific: "", favori: 0 },
		{ id: "83", nom: "A503", type: "T4", cat: "std", surface: "86.1", niveau: "R5", social: false, cellule: null, exterieur: "terrasse", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "25.5", cell: exportRoot.Axo.Axo_R5.PlanBT7, coord: APPT_503, appt: null, puce: null, hidden: false, pdf: "A503", visite360: null, aerien: null, aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "84", nom: "A504", type: "T4", cat: "std", surface: "86.1", niveau: "R5", social: false, cellule: "T4", exterieur: "terrasse", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "25.5", cell: exportRoot.Axo.Axo_R5.PlanBT8, coord: APPT_504, appt: null, puce: null, hidden: false, pdf: "A504", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },
		{ id: "85", nom: "A505", type: "T4", cat: "std", surface: "86.1", niveau: "R5", social: false, cellule: "T4", exterieur: "terrasse", batiment: "A", orientation: "Toutes expositions", nbre_chambres: 3, nbre_sdb: 2, surface_annexe: "25.5", cell: exportRoot.Axo.Axo_R5.PlanBT9, coord: APPT_505, appt: null, puce: null, hidden: false, pdf: "A505", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 140000, specific: "", favori: 0 },

		{ id: "86", nom: "B501", type: "T3", cat: "std", surface: "83.3", niveau: "R5", social: false, cellule: "T3", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 2, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R5.PlanBT10, coord: APPT_506, appt: null, puce: null, hidden: false, pdf: "B501", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "87", nom: "B506", type: "T3", cat: "std", surface: "83.3", niveau: "R5", social: false, cellule: "T3", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 2, nbre_sdb: 2, surface_annexe: "58.5", cell: exportRoot.Axo.Axo_R5.PlanBT11, coord: APPT_507, appt: null, puce: null, hidden: false, pdf: "B506", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 120000, specific: "", favori: 0 },
		{ id: "88", nom: "B507", type: "T2", cat: "std", surface: "52.5", niveau: "R5", social: false, cellule: "T2", exterieur: "balcon", batiment: "B", orientation: "Toutes expositions", nbre_chambres: 1, nbre_sdb: 1, surface_annexe: "5.9", cell: exportRoot.Axo.Axo_R5.PlanBT12, coord: APPT_508, appt: null, puce: null, hidden: false, pdf: "B507", visite360: null, aerien: "Jardin_R2_A206", aerien360: null, cellule_axo: null, prix: 80000, specific: "", favori: 0 },
	
	];

}


		

function getFlux() {
	if (fluxLotsActif) {
		$.ajax({
			url: fluxLotsParser,
			type: "POST",
			dataType: "text",
			data: { residence: fluxLotsResidence },
			success: function (data, status) {
				// console.log("Data parser : Received");
				// console.log(data);
				if (data == "Erreur") {
					fluxLoaded = false;
				} else {
					flux = JSON.parse(data);
					console.log("-------- Data parser --------");
					console.log(flux);
					fluxLoaded = true;
				}
				launchLoadingLD(currentEtage);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				// console.log("Data parser : Error");
				fluxLoaded = false;
				launchLoadingLD(currentEtage);
			}
		});

	} else {
		launchLoadingLD(currentEtage);
	}
}

function superficie_slide_handler(event, ui) {
	// console.log(ui.values);
	let a = Math.ceil((ui.values[0] * 100) / 484);
	let b = Math.ceil((ui.values[1] * 100) / 484);
	if (a == 0) a = 1;
	if (b == 0) b = 1;
	superficie_selected = [a, b];
	// $('#display_superficie_range').html("Min: " + ui.values[0] +'|'+ superficie_selected[0] + ", Max: " + ui.values[1] +'|'+ superficie_selected[1]);
	if (superficie_selected[1] <= 100) {
		$('#display_superficie_range').html("Min: " + superficie_selected[0] + ", Max: " + superficie_selected[1]);
	} else {
		$('#display_superficie_range').html("Min: " + superficie_selected[0] + ", Max: 100+");
	}
	tri_check_research();
}

function prix_slide_handler(event, ui) {
	let a = Math.ceil((ui.values[0] * 1000));
	let b = Math.ceil((ui.values[1] * 1000));
	if (a == 0) a = 0;
	if (b == 0) b = 1;
	prix_selected = [a, b];
	tri_check_research();
}


/******************************/
/*    Démarrage de l'appli    */
/******************************/
var tri_search_swiper, tri_grille_swiper, tri_liste_swiper;

$(document).ready(function () {

	initLogo();

	if (isIniFrame()) {
		$('#GUI-mobile_portrait_message').css('display', 'none');
		$('#big_container').css('display', 'block');
	}

	$('#GUI-boussole').css('display', 'block');
	$('#tri_menu_gauche_buttons_container').css('display', 'block');
	$('#bandeau_droit_logo_visiolab').css('display', 'flex');
	
	if (promoteur == "bouygues") {
		texte_menu_gauche = true;
		close_cross_on_galerie = true;
		is_cartouche_visible = true;
		deplace = true;
	}

	if (is_cartouche_visible) $('#GUI-cartouche').css('display', 'block');

	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	if (params.popup == 1) {
		$("#GUI-retour").css('display', 'block');
		$("#GUI-retour").click(function () {
			window.parent.postMessage("close_iframe", "*");
		});
	}

	canvas = document.getElementById("canvas");
	parent_container = document.getElementById("parent_container");

	if (isMobile()) {

		displayIsMobile = true;
		console.log("-- displayIsMobile");
		if (!$('#big_container').hasClass('mobile')) $('#big_container').addClass('mobile');

		if ($('#GUI-menu').hasClass('desktop')) $('#GUI-menu').removeClass('desktop');
		if ($('#GUI-menu').hasClass('reduce')) $('#GUI-menu').removeClass('reduce');
		if (!$('#GUI-menu').hasClass('mobile')) $('#GUI-menu').addClass('mobile');

		$('#GUI-menu.mobile #mySwiper').css('height', etages_niveau_count * 20);
		$('#GUI-menu.mobile #menu_desktop').css('display', 'flex');

	} else {

		if (!$('#GUI-menu').hasClass('desktop')) $('#GUI-menu').addClass('desktop');
		if ($('#GUI-menu').hasClass('reduce')) $('#GUI-menu').removeClass('reduce');
		if ($('#GUI-menu').hasClass('mobile')) $('#GUI-menu').removeClass('mobile');

		$('#GUI-menu.desktop #mySwiper').css('height', etages_niveau_count * 49);
		$('#GUI-menu.desktop #menu_desktop').css('display', 'flex');
	}

	// Swiper volet recherche step01
	if (!displayIsMobile) {
		$('#tri_volet_content_step01_scrollContent').attr('class', 'xCustomScroll');
	} else {
		$('#tri_volet_content_step01_scrollContent').css('overflow', 'auto');
	}

	// Scroller fiche récap
	if (!displayIsMobile) {
		$('#tri_volet_content_step02_fiche_scrollContent').css('overflow', 'auto');
		let tri_volet_content_step02_fiche_scrollContent = document.getElementById('tri_volet_content_step02_fiche_scrollContent');
		if (!tri_volet_content_step02_fiche_scrollContent.classList.contains('xCustomScroll'))
			tri_volet_content_step02_fiche_scrollContent.classList.add('xCustomScroll');
	} else {
		$('#tri_volet_content_step02_fiche_scrollContent').css('overflow', 'auto');
	}

	initBandeauDroit();
	bandeau_droit_calcul();
	initFavoris();

	if (is_btn_mode_nuit_visible) initModeNuit();

	if (texte_menu_gauche) $('#tri_menu_gauche_buttons_subcontainer').addClass('avec_texte');
	if (close_cross_on_galerie) $('#galerie_close').css('display', 'block');

	if (!is_galerie_active) $('#galerie_container_open_button').css('display', 'none');
	if (!is_video_active) $('#video_container_open_button').css('display', 'none');

	
	setEtageButton(currentEtage);

	// gestionTypeButton();
	initBandeauDroitButtons();


	if (cwRose) {
		roseAngle = roseStartAngle + (currentFrame * pasAngle);
	} else {
		roseAngle = roseStartAngle + (currentFrame * (-1 * pasAngle));
	}

	rotateBoussole(roseAngle);

	$('#btZoomMoins').on('click touch', function () {
		zoomValue -= pasZoom;
		ApplyZoomRange(zoomValue);
	});
	$('#btZoomPlus').on('click touch', function () {
		zoomValue += pasZoom;
		ApplyZoomRange(zoomValue);
	});

	getFlux();
	/* LIGHTBOX */
	$('#fermer-lightbox').on('click touch', function () {
		closeLightBox();
	});
	$('#fermer-lightbox-cellule').on('click touch', function () {
		closeLightBox();
	});
	$('#fermer-lightbox-aerien').on('click touch', function () {
		closeLightBox();
	});


	initBoussoleButtons();

	if (applicationEmbed) {
		$('#bt_FULLSCREEN').on('click touch',function(evt) {
			callbackObj.showMessage("fullscreen");
		});
	} else {
		$('#bt_FULLSCREEN').on('click touch',function(evt) {			
			fullscreenMode();			
		});
	}

	$('#tri_menu_gauche_buttons_subcontainer').on('click', function (e) {
		if (e.target !== this) return;
		closeVideoAndGalerie();
	})
	if (is_galerie_active) initGalerie();
	if (is_video_active) initVideo();
	/* LIGHTBOX */
	initLightboxCellule();
	initLightboxAerien();

	createjs.Ticker.addEventListener("tick", handleCreateJSTick);
	

});

function handleCreateJSTick(event) {
	if (!event.paused) {
		resizeCanvas();
	}
}

function triggerMobileMenu(open) {
	if (open) {
		$("#GUI-menu-mobile").animate({ "left": "0%" }, 600);
		$("#GUI-menu-background").css('display', 'block');
	} else {
		$("#GUI-menu-mobile").animate({ "left": "-20.83%" }, 600);
		$("#GUI-menu-background").css('display', 'none');
	}
}


/*************************/
/*    Rescale routine    */
/*************************/
function resizeCanvas() {

	container_size.width = $("#canvas_container").width();
	container_size.height = $("#canvas_container").height();
	// console.log(container_size);
	let ratio_state = 1;

	if ((container_size.width / container_size.height) >= canvas_ratio) {
		// console.log('ratio #1');
		let ratio_state = 1;
		let largeur_image = Math.floor(canvas_ratio * container_size.height);
		// let decalage_image = Math.floor((container_size.width - largeur_image)/2);
		let decalage_image = Math.floor((container_size.width - largeur_image));
		$('#canvas').css({ 'height': '100%', 'width': largeur_image });
		$('#canvas').css({ 'left': decalage_image, 'top': 0 });
		scaleStage = largeur_image / initialeSize.width;
	} else {
		// console.log('ratio #2');
		let ratio_state = 2;
		let hauteur_image = Math.floor(container_size.width / canvas_ratio);
		let decalage_image = Math.floor((container_size.height - hauteur_image) / 2);
		$('#canvas').css({ 'height': hauteur_image, 'width': '100%' });
		$('#canvas').css({ 'top': decalage_image, 'left': 0 });
		scaleStage = hauteur_image / initialeSize.height;
	}


	canvas_rect.x = parseInt($("#canvas").css('left'));
	canvas_rect.y = parseInt($("#canvas").css('top'));
	canvas_rect.w = parseInt($("#canvas").css('width'));
	canvas_rect.h = parseInt($("#canvas").css('height'));

	// console.log(canvas_rect);

	canvas.width = canvas_rect.w;
	canvas.height = canvas_rect.h;

	// console.log(scaleStage);
	stage.scaleX = scaleStage;
	stage.scaleY = scaleStage;

	// Logo
	let logo_left = 0;
	if ((!displayIsMobile) && (canvas_rect.x < 62)) {
		logo_left = 62;
	} else if ((displayIsMobile) && (canvas_rect.x < 50)) {
		logo_left = 50;
	} else {
		logo_left = canvas_rect.x;
	}
	$('#GUI-logo').css('left', logo_left);
	$('#GUI-logo').css('top', canvas_rect.y);	
	
	$('#GUI-cartouche').css('left', logo_left - 3);
	$('#GUI-cartouche').css('top', canvas_rect.y + parseInt($('#GUI-logo').css('height')) + 5);

	$('#GUI-retour').css('left', logo_left - 3);
	let retour_y_offset = canvas_rect.y + parseInt($('#GUI-logo').css('height'));
	if (is_cartouche_visible) retour_y_offset += parseInt($('#GUI-cartouche').css('height')) + 5;
	$('#GUI-retour').css('top', retour_y_offset);

	// Boussole
	$('#GUI-boussole').css('left', canvas_rect.x + Math.floor(canvas_rect.w / 2));
	$('#GUI-boussole').css('bottom', container_size.height - (canvas_rect.y + canvas_rect.h) + 10);
	$('#GUI-boussole').css('width', Math.round(canvas_rect.w * 0.2));

	// Correc scroll recap
	let fiche_container_width = parseInt($('#tri_volet_content_step02_fiche_scrollContent').css('width'));
	$('#results-fiche-view').css('width', fiche_container_width - 10);
	
	// Refresh display etiquette HTML
	if (canvas_rect.w <= 800) {
		etiquette_html.classList.remove('small');
		etiquette_html.classList.remove('large');
		etiquette_html.classList.remove('xlarge');
		etiquette_html.classList.add('xsmall');
	} else if ((canvas_rect.w > 800)&&(canvas_rect.w <= 1200)) {
		etiquette_html.classList.remove('xsmall');
		etiquette_html.classList.remove('large');
		etiquette_html.classList.remove('xlarge');
		etiquette_html.classList.add('small');
	} else if ((canvas_rect.w > 1200)&&(canvas_rect.w <= 1500)) {
		etiquette_html.classList.remove('xsmall');
		etiquette_html.classList.remove('small');
		etiquette_html.classList.remove('large');
		etiquette_html.classList.remove('xlarge');
	} else if ((canvas_rect.w > 1500)&&(canvas_rect.w <= 1700)) {
		etiquette_html.classList.remove('xsmall');
		etiquette_html.classList.remove('small');
		etiquette_html.classList.remove('xlarge');
		etiquette_html.classList.add('large');
	} else {
		etiquette_html.classList.remove('xsmall');
		etiquette_html.classList.remove('small');
		etiquette_html.classList.remove('large');
		etiquette_html.classList.add('xlarge');
	}

	if (current_lot !== null) { rotateLabel(current_lot); }

	etiquette_html.style.left = etiquette_pos.x + "px";
	etiquette_html.style.top = etiquette_pos.y + "px";

	// Update Stage
	loadingHD();
	resizeImagesIn(exportRoot.Axo["Axo_" + currentEtage][currentEtage]);
	stage.update();

	bandeau_droit_calcul();

}

function bandeau_droit_calcul() {

	let bandeau_droit_height = $('#GUI-menu').height();
	// console.log("bandeau_droit_height : " + bandeau_droit_height);

	if (!displayIsMobile) {

		if (bandeau_droit_height <= 350) {
			if ($('#GUI-menu').hasClass('desktop')) $('#GUI-menu').removeClass('desktop');
			if ($('#GUI-menu').hasClass('reduce')) $('#GUI-menu').removeClass('reduce');
			if (!$('#GUI-menu').hasClass('mobile')) $('#GUI-menu').addClass('mobile');
			$('#GUI-menu.mobile #mySwiper').css('height', etages_niveau_count * 20);
			// $('#GUI-menu.desktop #menu_desktop').css('top', '25px');
			// $('#GUI-menu.desktop #menu_desktop').css('height', 'calc(100% - 48px)');

		} else {
			let eval_height = 0;
			if (is_btn_fullscreen_visible) eval_height += 50;
			if (is_btn_ensoleillement_visible) eval_height += 135;
			if (is_btn_mode_nuit_visible) eval_height += 49;
			if (is_btn_in_situ_visible) eval_height += 100;
			etages_type.forEach(function (etage_type) {
				if (etage_type == "BAS") eval_height += 100;
				if (etage_type == "HAUT") eval_height += 100;
				// if (etage_type == "NIVEAU") eval_height += 55;
			});
			// + logo
			eval_height += 105;

			// console.log("eval hauteur bandeau: " + eval_height);
			// 180px pour 2.5 x étage + boutons up/down
			if (eval_height + 180 > bandeau_droit_height) {
				if (!$('#GUI-menu').hasClass('desktop')) $('#GUI-menu').addClass('desktop');
				if (!$('#GUI-menu').hasClass('reduce')) $('#GUI-menu').addClass('reduce');
				if ($('#GUI-menu').hasClass('mobile')) $('#GUI-menu').removeClass('mobile');
				$('#GUI-menu.desktop #mySwiper').css('height', etages_niveau_count * 35);
				// $('#GUI-menu.desktop #menu_desktop').css('top', '38px');
				// $('#GUI-menu.desktop #menu_desktop').css('height', 'calc(100% - 60px)');
			} else {
				if (!$('#GUI-menu').hasClass('desktop')) $('#GUI-menu').addClass('desktop');
				if ($('#GUI-menu').hasClass('reduce')) $('#GUI-menu').removeClass('reduce');
				if ($('#GUI-menu').hasClass('mobile')) $('#GUI-menu').removeClass('mobile');
				$('#GUI-menu.desktop #mySwiper').css('height', etages_niveau_count * 49);
				// $('#GUI-menu.desktop #menu_desktop').css('top', '50px');
				// $('#GUI-menu.desktop #menu_desktop').css('height', 'calc(100% - 155px)');
			}
		}


	} else {

	}



}


/********************************************/
/*    Gestion logos / favicon promoteurs    */
/********************************************/
function initLogo() {

	switch (cleanString(promoteur)) {
		case "bouygues":
			$('#GUI-logo').attr('src', 'assets/logos/logo_bouygues.svg');
			$('#GUI-logo').addClass('bouygues');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_bouygues.svg');
			setupFavicon('./assets/favicon/favicon_bouygues.ico')
			break;

		case "nacarat":
			$('#GUI-logo').attr('src', 'assets/logos/logo_nacarat.svg');
			$('#GUI-logo').addClass('nacarat');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_nacarat.svg');
			setupFavicon('./assets/favicon/favicon_nacarat.ico')
			break;

		case "caimmo":
			$('#GUI-logo').attr('src', 'assets/logos/logo_caimmo.svg');
			$('#GUI-logo').addClass('caimmo');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_caimmo.svg');
			setupFavicon('./assets/favicon/favicon_caimmo.ico')
			break;

		case "angelotti":
			$('#GUI-logo').attr('src', 'assets/logos/logo_angelotti.png');
			$('#GUI-logo').addClass('angelotti');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_angelotti.jpg');
			setupFavicon('./assets/favicon/favicon_angelotti.ico')
			break;

		case "eiffage":
			$('#GUI-logo').attr('src', 'assets/logos/logo_eiffage.svg');
			$('#GUI-logo').addClass('eiffage');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_eiffage.svg');
			setupFavicon('./assets/favicon/favicon_eiffage.png')
			break;

		case "marignan":
			$('#GUI-logo').attr('src', 'assets/logos/logo_marignan.svg');
			$('#GUI-logo').addClass('marignan');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_marignan.svg');
			setupFavicon('./assets/favicon/favicon_marignan.png')
			break;

		case "gambetta":
			$('#GUI-logo').attr('src', 'assets/logos/logo_gambetta.svg');
			$('#GUI-logo').addClass('gambetta');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_gambetta.svg');
			setupFavicon('./assets/favicon/favicon_gambetta.png')
			break;

		case "lp_promotion":
			$('#GUI-logo').attr('src', 'assets/logos/logo_lp_promotion.svg');
			$('#GUI-logo').addClass('lp_promotion');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_lp_promotion.svg');
			setupFavicon('./assets/favicon/favicon_lp_promotion.ico')
			break;

		case "st_agne":
			$('#GUI-logo').attr('src', 'assets/logos/logo_st_agne.svg');
			$('#GUI-logo').addClass('st_agne');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_st_agne.svg');
			setupFavicon('./assets/favicon/favicon_st_agne.png')
			break;

		case "alsei":
			$('#GUI-logo').attr('src', 'assets/logos/logo_alsei.svg');
			$('#GUI-logo').addClass('alsei');
			$('#tri_volet_logo img').attr('src', './assets/logos/logo_menu_alsei.svg');
			let link = null;

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '60x60';
			link.href = './assets/favicon/alsei/apple-icon-60x60.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '72x72';
			link.href = './assets/favicon/alsei/apple-icon-72x72.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '76x76';
			link.href = './assets/favicon/alsei/apple-icon-76x76.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '114x114';
			link.href = './assets/favicon/alsei/apple-icon-114x114.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '120x120';
			link.href = './assets/favicon/alsei/apple-icon-120x120.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '144x144';
			link.href = './assets/favicon/alsei/apple-icon-144x144.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '152x152';
			link.href = './assets/favicon/alsei/apple-icon-152x152.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'apple-touch-icon';
			link.sizes = '180x180';
			link.href = './assets/favicon/alsei/apple-icon-180x180.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'icon';
			link.type = 'image/png';
			link.sizes = '192x192';
			link.href = './assets/favicon/alsei/android-icon-192x192.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'icon';
			link.type = 'image/png';
			link.sizes = '32x32';
			link.href = './assets/favicon/alsei/favicon-32x32.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'icon';
			link.type = 'image/png';
			link.sizes = '96x96';
			link.href = './assets/favicon/alsei/favicon-96x96.png';
			document.head.appendChild(link);

			link = document.createElement('link');
			link.rel = 'icon';
			link.type = 'image/png';
			link.sizes = '16x16';
			link.href = './assets/favicon/alsei/favicon-16x16.png';
			document.head.appendChild(link);

			break;
	}
}

function setupFavicon(url) {
	var link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.head.appendChild(link);
	}
	link.href = url;
}


/******************/
/*    Mode Nuit   */
/******************/
function initModeNuit() {

}


/******************/
/*    Boussole    */
/******************/
function initBoussoleButtons() {
	$('#boussole_right').on('mousedown', function () {
		resetZoom()
		startRotation("right");
	});
	$('#boussole_right').on('mouseout mouseup', function () {
		stopRotation();
	});
	$('#boussole_left').on('mousedown', function () {
		resetZoom()
		startRotation("left");
	});
	$('#boussole_left').on('mouseout mouseup', function () {
		stopRotation();
	});

	$('#zoom_out').on('click', function () {
		zoomValue -= pasZoom;
		ApplyZoomRange(zoomValue);
	});
	$('#zoom_in').on('click', function () {
		zoomValue += pasZoom;
		ApplyZoomRange(zoomValue);
	});

}

let rotation_interval = null;
function startRotation(direction) {
	if (direction == "left") {
		if (rotation_interval == null) {
			rotation_interval = window.setInterval(function () {
				imagePlus();
			}, 40);
		}
	} else if (direction == "right") {
		if (rotation_interval == null) {
			rotation_interval = window.setInterval(function () {
				imageMoins();
			}, 40);
		}
	}
}
function stopRotation() {
	clearInterval(rotation_interval);
	rotation_interval = null;
}


/*************************/
/*    Gestion du flux    */
/*************************/
function testElementInFlux(element) {
	retour = false;
	flux.forEach(function (fluxElement) {
		if (typeof fluxElement[0] !== 'undefined' || fluxElement[0] !== null) {
			if (fluxElement[0] == element) retour = true;
		}
		if (typeof fluxElement.NUMERO !== 'undefined' || fluxElement.NUMERO !== null) {
			if (fluxElement.NUMERO == element) retour = true;
		}
		if (typeof fluxElement.reference !== 'undefined' || fluxElement.reference !== null) {
			if (contains(fluxElement.reference, fluxPrefixNom + element)) retour = fluxElement;
		}
	});
	return retour;
}
function gestionFlux() {
	if (fluxLoaded) {
		lots.forEach(function ($lot_courant) {
			flux_add_lot = testElementInFlux($lot_courant.nom);
			// console.log(typeof flux_add_lot);
			if (flux_add_lot) {
				$lot_courant.social = false;
				if (typeof flux_add_lot !== 'boolean') {
					$lot_courant.etage = flux_add_lot.etage;
					$lot_courant.type = flux_add_lot.type;
					$lot_courant.surface = flux_add_lot.surface;
					$lot_courant.prix = flux_add_lot.prix;
					$lot_courant.orientation = flux_add_lot.orientation;
				}
			} else {
				$lot_courant.social = true;
			}
		});
	}
}


/**********************************/
/*    Fonctions de l'interface    */
/**********************************/
var swiper_bandeau_droit = null;
function initBandeauDroit() {
	// console.log("-- initBandeauDroit");
	// Insertion et inversion des étages de niveaux pour qu'ils soient insérés de bas en haut
	let etages_niveau = [];
	for (element in etages) {
		let etage = etages[element];
		if (etage.etage_type == "NIVEAU") {
			etages_niveau.push(etage);
		}
	}
	let str = "";
	for (let i = etages_niveau.length - 1; i >= 0; i--) {
		let etage = etages_niveau[i];
		if (etage.etage_type == "NIVEAU") {
			// str += '<li id="bt_'+ etage.prefix + '">';
			// str += '<div class="text-white">' + etage.nom_affichage + '</div>';
			// str += '</li>';
			str += '<div id="bt_' + etage.prefix + '"  class="swiper-slide">' + etage.nom_affichage + '</div>';
		}
	}
	$('#GUI-menu .swiper-wrapper').html(str);

	swiper_bandeau_droit = new Swiper("#mySwiper", {
		slidesPerView: "auto",
		direction: "vertical",
		freeMode: true,
		mousewheel: true,
		resistanceRatio: 0,
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true,
		},
		navigation: {
			disabledClass: 'myswiper-button-disabled',
			nextEl: '.myswiper-button-next',
			prevEl: '.myswiper-button-prev',
		},
	});

	(is_btn_fullscreen_visible) ? $('#bt_FULLSCREEN').css('display', 'flex') : $('#bt_FULLSCREEN').css('display', 'none');
	(is_btn_ensoleillement_visible) ? $('#bt_SUN').css('display', 'flex') : $('#bt_SUN').css('display', 'none');
	(is_btn_mode_nuit_visible) ? $('#bt_NIGHT').css('display', 'flex') : $('#bt_NIGHT').css('display', 'none');
	(is_btn_in_situ_visible) ? $('#bt_IN_SITU').css('display', 'flex') : $('#bt_IN_SITU').css('display', 'none');
	(is_btn_haut_visible) ? $('#bt_HAUT').css('display', 'flex') : $('#bt_HAUT').css('display', 'none');
	(is_btn_bas_visible) ? $('#bt_BAS').css('display', 'flex') : $('#bt_BAS').css('display', 'none');



}

function rotateBoussole(angle) {
	$('#cadran').attr('transform', 'rotate(' + angle + ' 0 0)');
}

function initBandeauDroitButtons() {

	if (is_btn_ensoleillement_visible) {

		let sun_popup = $('#GUI-sun');
		let sun_popup_mobile = $('#GUI-sun-mobile');

		initEnsoleillement();

		$('#bt_SUN').hover(function () {
			if (!$('#bt_SUN').hasClass('actif')) {
				$('#bt_SUN').addClass('actif');
			}
		}, function () {
			if (!displayIsMobile) {
				if (sun_popup.css('display') == "none") $('#bt_SUN').removeClass('actif');
			} else {
				if (sun_popup_mobile.css('display') == "none") $('#bt_SUN').removeClass('actif');
			}

		});

		/* Fermeture globale popup ensoleillement */
		$('#big_container').on('click', function (event) {

			// console.log("click global");

			if (!displayIsMobile) {

				if ((sun_popup.css('display') !== "none") && ($(event.target).parents('#bt_SUN').length == 0)) {
					if (($(event.target).parents('#GUI-sun').length == 0) && (event.target.id !== "bt_SUN")) {
						sun_popup.css({ 'display': 'none', 'opacity': '0' });
					} else {
						sun_popup.css('display', 'block');
						sun_popup.animate({ 'opacity': '1' }, 300);
					}

				}

			} else {

				if ((sun_popup_mobile.css('display') !== "none") && ($(event.target).parents('#bt_SUN').length == 0)) {
					console.log("Click mobile + not bt_SUN");
					if (($(event.target).parents('#GUI-sun-mobile').length == 0) && (event.target.id !== "bt_SUN")) {
						console.log("ouvert");
						sun_popup_mobile.css({ 'display': 'none', 'opacity': '0' });
					} else {
						console.log("fermé");
						sun_popup_mobile.css('display', 'block');
						sun_popup_mobile.animate({ 'opacity': '1' }, 300);
					}
				}

			}

		});

		$('#bt_SUN').on('click', function (event) {

			console.log("-- click bt_SUN");
			resetZoom()
			tri_close_volet();

			let checkbox_nuit = document.getElementById('mode_nuit');
			checkbox_nuit.checked = false;
			checkbox_nuit.disabled = true;
			$('#bt_NIGHT').css('display', 'none');

			if (!displayIsMobile) {

				if (sun_popup.css('display') == 'none') {
					sun_popup.css('display', 'block');
					sun_popup.animate({ 'opacity': '1' }, 300);
				}

			} else {

				if (sun_popup_mobile.css('display') == 'none') {
					sun_popup_mobile.css('display', 'block');
					sun_popup_mobile.animate({ 'opacity': '1' }, 300);
				}

			}

			let selected_description = ensoleillement_description[ensoleillement_selection.month];
			currentEtage = selected_description.prefix + "_" + selected_description.month + "_" + selected_description.hours[ensoleillement_selection.hour];
			setEtageButton(currentEtage);
			displayEnsoleillement(ensoleillement_selection);

		});

	}

	if (is_btn_mode_nuit_visible) {

		if ((currentEtage == "HAUT") || (currentEtage == "BAS")) {
			document.getElementById('mode_nuit').disabled = false;
			$('#bt_NIGHT').css('display', 'flex');
		} else {
			document.getElementById('mode_nuit').disabled = true;
			$('#bt_NIGHT').css('display', 'none');
		}

		$('#mode_nuit').on('click', function (event) {

			resetZoom()
			tri_close_volet();

			let checkbox_nuit = document.getElementById('mode_nuit');
			if (checkbox_nuit.checked) {

				is_mode_nuit_active = true;
				currentEtage += "_NUIT";
				let etage = etages[currentEtage];
				currentPlan = null;

				hideAxo();
				if (!etage.LD_loaded) {
					launchLoadingLD(currentEtage);
				} else {
					changeEtage(currentEtage);
				}
				if (panelOpen) {
					hidePanel();
					hideEtiquetteHTML();
				}

			} else {

				currentEtage = currentEtage.split('_')[0];
				// console.log(currentEtage);
				$('#bt_' + currentEtage).trigger('click');

			}

		});

	}

	if (is_btn_in_situ_visible) {

		$('#bt_IN_SITU').hover(function () {
			if (!$('#bt_IN_SITU').hasClass('actif')) {
				$('#bt_IN_SITU').addClass('actif');
			}
		}, function () {
			if (etages_type[etages_noms.indexOf(currentEtage)] !== "IN_SITU")
				$('#bt_IN_SITU').removeClass('actif');
		});

		$('#bt_IN_SITU').on('click', function (event) {

			console.log("-- click bt_IN_SITU");
			resetZoom()
			tri_close_volet();

			let checkbox_nuit = document.getElementById('mode_nuit');
			checkbox_nuit.checked = false;
			checkbox_nuit.disabled = true;
			$('#bt_NIGHT').css('display', 'none');

			let in_situ_index = 0;
			etages_type.forEach(function (type, type_index) {
				if (type === "IN_SITU") in_situ_index = type_index;
			});
			currentEtage = etages_noms[in_situ_index];
			setEtageButton(currentEtage);

			hideAxo();
			if (!etages[currentEtage].LD_loaded) {
				launchLoadingLD(currentEtage);
			} else {
				changeEtage(currentEtage);
			}
			if (panelOpen) {
				hidePanel();
				hideEtiquetteHTML();
			}

		});
	}

	for (element in etages) {
		let etage = etages[element];

		if ((etage.etage_type.includes("NIVEAU")) || (etage.etage_type.includes("BAS")) || (etage.etage_type.includes("HAUT"))) {

			// console.log(etage.prefix);

			$('#bt_' + etage.prefix).hover(function () {
				if (!$('#bt_' + etage.prefix).hasClass('actif')) {
					$('#bt_' + etage.prefix).addClass('actif');
				}
			}, function () {
				if (etage.prefix != currentEtage) $('#bt_' + etage.prefix).removeClass('actif');
			});

			$('#bt_' + etage.prefix + ', #bt_' + etage.prefix + '-mobile').on('click', function (event, option) {

				// console.log("-- " + $(this).attr('id') + " clicked");
				resetZoom()
				// Dans le cas où on ne veut pas fermer le volet (trigger du click d'étage via grille des résultats par exemple)
				if ((option == null) || (option == 'undefined')) {
					tri_close_volet();
				}


				let etage_radical = $(this).attr('id');
				etage_radical = etage_radical.substring(3);
				etage_radical = etage_radical.split("-")[0];
				let etage = etages[etage_radical];
				// console.log("etage clicked : " + etage_radical);

				let checkbox_nuit = document.getElementById('mode_nuit');
				checkbox_nuit.checked = false;

				if (is_btn_mode_nuit_visible) {
					if ((etage_radical == "HAUT") || (etage_radical == "BAS")) {
						checkbox_nuit.disabled = false;
						$('#bt_NIGHT').css('display', 'flex');
					} else {
						checkbox_nuit.disabled = true;
						$('#bt_NIGHT').css('display', 'none');
					}
				}

				currentPlan = null;
				currentEtage = etage_radical;
				setEtageButton(currentEtage);

				hideAxo();
				animateElements(currentFrame);
				stage.update();
				if (!etage.LD_loaded) {
					launchLoadingLD(currentEtage);
				} else {
					changeEtage(currentEtage);
				}

				if (panelOpen) {
					hidePanel();
					hideEtiquetteHTML();
				}

			});

		}


	}

}

function setEtageButton(etage_selected) {

	let etage_selected_type = etages_type[etages_noms.indexOf(etage_selected)];
	if (etage_selected_type === "SOLEIL") {
		if (!$("#bt_SUN").hasClass('actif')) $("#bt_SUN").addClass('actif');
	} else {
		if ($("#bt_SUN").hasClass('actif')) $("#bt_SUN").removeClass('actif');
	}

	if (etage_selected_type === "IN_SITU") {
		if (!$("#bt_IN_SITU").hasClass('actif')) $("#bt_IN_SITU").addClass('actif');
	} else {
		if ($("#bt_IN_SITU").hasClass('actif')) $("#bt_IN_SITU").removeClass('actif');
	}

	etages_noms.forEach(function (etage_name, etage_index) {

		if (etage_name == etage_selected) {
			if (!$("#bt_" + etage_name).hasClass('actif')) $("#bt_" + etage_name).addClass('actif');
		} else {
			if ($("#bt_" + etage_name).hasClass('actif')) $("#bt_" + etage_name).removeClass('actif');
		}

	});
}

function initEnsoleillement() {

	ensoleillement_description = [];
	let soleil_indexes = [];
	let soleil_names = [];
	etages_type.forEach(function (type, index_type) {
		if (type === "SOLEIL") soleil_indexes.push(index_type);
	});
	soleil_indexes.forEach(function (index) {
		soleil_names.push(etages_noms[index]);
	});
	soleil_names.forEach(function (name) {
		let name_split = name.split('_');
		let prefix = name_split.slice(0, -2).join('_');
		let month = name_split[name_split.length - 2];
		let hour = name_split[name_split.length - 1];
		let month_found = false;
		// console.log(month + ' - ' + hour);
		if (ensoleillement_description.length == 0) {
			ensoleillement_description.push({ 'month': month, 'hours': [hour], 'prefix': prefix });
		} else {
			ensoleillement_description.forEach(function (elem) {
				if (elem.month == month) {
					month_found = true;
					elem.hours.push(hour);
				}
			});
			if (!month_found) {
				ensoleillement_description.push({ 'month': month, 'hours': [hour], 'prefix': prefix });
			}
		}
	});

	// MODALE ENSOLEILLEMENT
	// $('.insolation a').on('click', function () {
	//     $('#GUI-sun').show();
	// });

	$('#GUI-sun a.close').on('click', function () {
		$('#GUI-sun').animate({ 'opacity': '0' }, 300, function () {
			$('#GUI-sun').css('display', 'none');
		});
	});
	$('#GUI-sun .btns-wrapper a').on('click', function () {
		$('#GUI-sun .btns-wrapper a').removeClass('active')
		$(this).addClass('active');
		ensoleillement_selection.month = parseInt($(this).attr('id').substring(6)) - 1;
		displayEnsoleillement(ensoleillement_selection);
	});

	// Ensoleillement slider
	$("#sun-range").slider({
		value: 2,
		min: 1,
		max: 3,
		slide: function (event, ui) {
			$("#sun-rotation").css("transform", "translateX(-8px)rotate(-" + convertSliderValueToDegrees(ui.value) + "deg)");
		},
		change: function (event, ui) {
			ensoleillement_selection.hour = parseInt($("#sun-range").slider("value")) - 1;
			displayEnsoleillement(ensoleillement_selection);
		}
	});

	$("#sun-rotation").val("$" + $("#superficie-rangexx").slider("value"));
	$("#sun-rotation").css("transform", "translateX(-8px) rotate(-" + convertSliderValueToDegrees($("#sun-range").slider("value")) + "deg)");



	$('#GUI-sun-mobile .btns-wrapper-mobile a').on('click', function () {
		$('#GUI-sun-mobile .btns-wrapper-mobile a').removeClass('active')
		$(this).addClass('active');
		ensoleillement_selection.month = parseInt($(this).attr('id').substring(6)) - 1;
		displayEnsoleillement(ensoleillement_selection);
	});
	$("#sun-range-mobile").slider({
		orientation: 'vertical',
		value: 2,
		min: 1,
		max: 3,
		slide: function (event, ui) { },
		change: function (event, ui) {
			let val = parseInt($("#sun-range-mobile").slider("value"));
			// console.log(val);
			// if (val == 1) { val = 3 } else if (val == 3) { val = 1 };
			// console.log(val);
			ensoleillement_selection.hour = val - 1;
			displayEnsoleillement(ensoleillement_selection);
		}
	});

}

function displayEnsoleillement(values) {
	let current_description = ensoleillement_description[values.month];
	currentEtage = current_description.prefix + "_" + current_description.month + "_" + current_description.hours[values.hour];
	hideAxo();
	if (!etages[currentEtage].LD_loaded) {
		launchLoadingLD(currentEtage);
	} else {
		changeEtage(currentEtage);
	}
	if (panelOpen) {
		hidePanel();
		hideEtiquetteHTML();
	}
}

function convertSliderValueToDegrees(value) {
	let degree = 0;
	switch (value) {
		case 1:
			degree = 150;
			break;
		case 2:
			degree = 90;
			break;
		case 3:
			degree = 30;
			break;
	}
	return degree;
}

/**********************************/
/*         Galerie & Vidéo        */
/**********************************/

function initGalerie() {

	$('#galerie_container_open_button').on('click', function () {
		let galerie_bigcontainer = document.getElementById('galerie_bigcontainer');
		// console.log(galerie_bigcontainer.classList);
		if (!galerie_bigcontainer.classList.contains('show')) galerie_bigcontainer.classList.add('show');
		let galerie_container_open_button = document.getElementById('galerie_container_open_button');
		if (!galerie_container_open_button.classList.contains('actif')) galerie_container_open_button.classList.add('actif');
		if (is_video_active) closeVideo();
	});

	$('#galerie_bigcontainer').on('click', function (e) {
		if (e.target !== this) return;
		closeVideoAndGalerie();
	});
	$('#galerie_close').on('click', function (e) {
		closeVideoAndGalerie();
	});

	var galerie_elements = $('img', '#galerie_container').toArray();

	galerie_elements.forEach(function (elem) {
		$(elem).on('click touch', function (el) {
			$('#galerie_lightbox').removeClass('hide').addClass('unhide');
			galerie_swiper.slideTo(galerie_elements.indexOf(elem), 20);
			galerie_swiper.update();
		});
		$('.galerie_swiper_wrapper').append("<div class=\"galerie_swiper_slide\"><div class=\"galerie_swiper_slide_contain\"><img src=\"" + elem.src + "\" class=\"galerie_slide_img\" /></div></div>");
	});

	$('img', '.galerie_swiper_wrapper').toArray().forEach(function (elem) {
		$(elem).on('click', function (el) {
			$('#galerie_lightbox').removeClass('unhide').addClass('hide');
		});
	});

	var galerie_swiper = new Swiper(('.galerie_swiper_container'), {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 0,
		containerModifierClass: 'galerie_swiper_container',
		wrapperClass: 'galerie_swiper_wrapper',
		slideClass: 'galerie_swiper_slide',
		nested: true,
		effect: 'slide',
		navigation: {
			nextEl: '.galerie-button-next',
			prevEl: '.galerie-button-prev',
		}
	});
}

let video_orbitale = null;
function initVideo() {

	video_orbitale = document.getElementById('video_orbitale');
	video_orbitale.volume = 0.5;

	$('#video_container_open_button').on('click', function () {
		let video_bigcontainer = document.getElementById('video_bigcontainer');
		if (!video_bigcontainer.classList.contains('show')) video_bigcontainer.classList.add('show');
		let video_container_open_button = document.getElementById('video_container_open_button');
		if (!video_container_open_button.classList.contains('actif')) video_container_open_button.classList.add('actif');
		if (is_galerie_active) closeGalerie();

		window.setTimeout(function () {
			video_orbitale.play().then(() => {
				console.log("Vidéo lancée");
			}).catch((error) => {
				console.log("Erreur au lancement de la vidéo");
			});
		});
	});

	$('#video_bigcontainer').on('click', function (e) {
		if (e.target !== this) return;
		closeVideoAndGalerie();
	});



}

function resetVideo() {
	video_orbitale.pause();
	video_orbitale.currentTime = 0;
}

function closeVideoAndGalerie() {
	closeGalerie();
	closeVideo();
}

function closeVideo() {
	let video_bigcontainer = document.getElementById('video_bigcontainer');
	if (is_video_active && video_bigcontainer.classList.contains('show')) {
		video_bigcontainer.classList.remove('show');
		resetVideo();
		let video_container_open_button = document.getElementById('video_container_open_button');
		if (video_container_open_button.classList.contains('actif')) video_container_open_button.classList.remove('actif');
	}
}
function closeGalerie() {
	let galerie_bigcontainer = document.getElementById('galerie_bigcontainer');
	let galerie_lightbox = document.getElementById('galerie_lightbox');
	if (is_galerie_active && galerie_bigcontainer.classList.contains('show')) {
		galerie_bigcontainer.classList.remove('show');
		if (galerie_lightbox.classList.contains('unhide')) {
			galerie_lightbox.classList.remove('unhide');
			galerie_lightbox.classList.add('hide');
		}
		let galerie_container_open_button = document.getElementById('galerie_container_open_button');
		if (galerie_container_open_button.classList.contains('actif')) galerie_container_open_button.classList.remove('actif');
	}
}


/**********************************/
/*    Fonctions de la maquette    */
/**********************************/
function addEvents() {

	// Ajout des actions sur les cellules
	lots.forEach(function (elem) {

		if (elem.social) {
			social.push(elem.cell);
		} else {
			createPuce(elem);
			if (affichageNomLots) addApptNames(elem);

			if (elem.cat === "std") {
				if (elem.type != "ROOM") {
					$(elem.cell).on('click touchend', function (event) {
						clicked_object = this.name;
						// actionOnCell(elem.cell);
						console.log(elem)
						actionOnCell(elem);
					});
				} else {
					$(elem.cell).on('click touchend', function (event) {
						clicked_object = this.name;
						openLightboxCellule(elem);
					});
				}
			} else { }
		}

	});

	if ((hideSocialArea) && (isSocial)) {
		for (var i = 0; i < social.length; i++) {
			social[i].visible = false;
		}
	}


	imgPlan = document.getElementById("planImg");

	addOrbitaleGestureControler();

	animateElements(currentFrame);
	if (theTouchisEnabled()) createjs.Touch.enable(stage, false, true);
	lots.forEach(function (elem) {
		if (elem.hidden) elem.cell.visible = false;
	});
}

function createPuce(elem) {

	var thePuce;

	if (elem.cat == "nozone") {
		thePuce = new addNewPictoNoZone("puce_" + elem.nom, elem);
	} else if (elem.type == "ROOM") {
		thePuce = new addNewPictoPicture("puce_" + elem.nom, elem);
	} else {
		thePuce = new addNewPuce("puce_" + elem.nom, elem);
	}

	switch (elem.niveau) {
		case "R0":
			exportRoot.Axo.Axo_R0.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R0.getChildByName("puce_" + elem.nom);
			break;

		case "R1":
			exportRoot.Axo.Axo_R1.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R1.getChildByName("puce_" + elem.nom);
			break;

		case "R2":
			exportRoot.Axo.Axo_R2.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R2.getChildByName("puce_" + elem.nom);
			break;

		case "R3":
			exportRoot.Axo.Axo_R3.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R3.getChildByName("puce_" + elem.nom);
			break;

		case "R4":
			exportRoot.Axo.Axo_R4.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R4.getChildByName("puce_" + elem.nom);
			break;

		case "R5":
			exportRoot.Axo.Axo_R5.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R5.getChildByName("puce_" + elem.nom);
			break;

		case "R6":
			exportRoot.Axo.Axo_R6.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R6.getChildByName("puce_" + elem.nom);
			break;

		case "R7":
			exportRoot.Axo.Axo_R7.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R7.getChildByName("puce_" + elem.nom);
			break;

		case "R8":
			exportRoot.Axo.Axo_R8.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R8.getChildByName("puce_" + elem.nom);
			break;

		case "R9":
			exportRoot.Axo.Axo_R9.addChild(thePuce);
			elem.puce = exportRoot.Axo.Axo_R9.getChildByName("puce_" + elem.nom);
			break;

	}

	elem.puce.alpha = 1.0;

	stage.update();


}

/* XAV - Ajout des puces */
function addNewPuce(name, elem) {
	var puce = new lib.puce();
	puce.set({
		name: name,
		x: elem.coord[currentFrame].x,
		y: elem.coord[currentFrame].y,
		cursor: "pointer"
	});

	$(puce).on('click touch', function (event) {
		clicked_object = elem.cell.name;
		console.log(elem)
		actionOnCell(elem);
		// actionOnCell(elem.cell);
	});

	return puce;
}

function addNewPictoPicture(name, elem) {
	var puce = new lib.picto_picture();
	puce.set({
		name: name,
		x: elem.coord[currentFrame].x,
		y: elem.coord[currentFrame].y,
		cursor: "pointer"
	});

	$(puce).on('click touch', function (event) {
		clicked_object = elem.cell.name;
		openLightboxCellule(elem);
	});

	return puce;
}

function addNewPictoNoZone(name, elem) {
	var puce = new lib.picto_maison();
	puce.set({
		name: name,
		x: elem.coord[currentFrame].x,
		y: elem.coord[currentFrame].y,
		cursor: "pointer"
	});

	$(puce).on('click touch', function (event) {
		clicked_object = elem.puce.name;
		console.log(clicked_object)
		actionOnCell(elem);
		// actionOnCell(elem.puce);
		// actionOnCellXav(elem.cell);
	});

	return puce;
}

function addApptNames(elem) {

	elem.appt = new createjs.Container();
	elem.appt.set({
	});

	var bg1 = new createjs.Shape();
	bg1.graphics.beginFill("white").drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
	if (elem.type === "T1" || (elem.type === "T1D") || (elem.type === "T1B"))
		bg1.graphics.beginStroke(colorT1).drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
	if (elem.type === "T2" || (elem.type === "T2D") || (elem.type === "T2B"))
		bg1.graphics.beginStroke(colorT2).drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
	if ((elem.type === "T3") || (elem.type === "T3D") || (elem.type === "T3B"))
		bg1.graphics.beginStroke(colorT3).drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
	if ((elem.type === "T4") || (elem.type === "T4D") || (elem.type === "T4B"))
		bg1.graphics.beginStroke(colorT4).drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
	if ((elem.type === "T5") || (elem.type === "T5D") || (elem.type === "T5B"))
		bg1.graphics.beginStroke(colorT5).drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
	if ((elem.type === "T6") || (elem.type === "T6D") || (elem.type === "T6B"))
		bg1.graphics.beginStroke(colorT6).drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
	if ((elem.type === "ROOM"))
		bg1.graphics.beginStroke(colorROOM).drawRoundRect(-puceSize.width / 2, -puceSize.height / 2, puceSize.width, puceSize.height, roundedCorner, roundedCorner, roundedCorner, roundedCorner);


	var text = new createjs.Text(elem.nom, 'bold 16px GoboldThin');
	if ((elem.type === "T1") || (elem.type === "T1D") || (elem.type === "T1B"))
		text.set({
			color: colorT1,
			textAlign: "center",
			textBaseline: "middle",
			x: 0,
			y: 0
		});
	if ((elem.type === "T2") || (elem.type === "T2D") || (elem.type === "T2B"))
		text.set({
			color: colorT2,
			textAlign: "center",
			textBaseline: "middle",
			x: 0,
			y: 0
		});
	if ((elem.type === "T3") || (elem.type === "T3D") || (elem.type === "T3B"))
		text.set({
			color: colorT3,
			textAlign: "center",
			textBaseline: "middle",
			x: 0,
			y: 0
		});
	if ((elem.type === "T4") || (elem.type === "T4D") || (elem.type === "T4B"))
		text.set({
			color: colorT4,
			textAlign: "center",
			textBaseline: "middle",
			x: 0,
			y: 0
		});
	if ((elem.type === "T5") || (elem.type === "T5D") || (elem.type === "T5B"))
		text.set({
			color: colorT5,
			textAlign: "center",
			textBaseline: "middle",
			x: 0,
			y: 0
		});
	if ((elem.type === "T6") || (elem.type === "T6D") || (elem.type === "T6B"))
		text.set({
			color: colorT6,
			textAlign: "center",
			textBaseline: "middle",
			x: 0,
			y: 0
		});
	if ((elem.type === "ROOM"))
		text.set({
			color: colorROOM,
			textAlign: "center",
			textBaseline: "middle",
			x: 0,
			y: 0
		});

	elem.appt.set({
		name: "appt" + elem.nom,
		x: elem.coord[currentFrame].x + decalPuce.x + offsetPanel.x,
		y: elem.coord[currentFrame].y - decalPuce.y / 4 + offsetPanel.y
	});

	bg1.alpha = 0.4;
	text.alpha = 1.0;

	elem.appt.addChild(bg1, text);

	exportRoot.Axo["Axo_" + elem.niveau].addChild(elem.appt);
	elem.appt = exportRoot.Axo["Axo_" + elem.niveau].getChildByName("appt" + elem.nom);

}

function animateElements(frame_number) {

	// Anims Globales
	for (let etage_name in etages) {
		etages[etage_name].easeljs_anim.gotoAndStop(frame_number);
	}

	lots.forEach(function (elem) {
		rotatePlans(elem);
		if (!elem.social) {
			elem.puce.set({
				x: elem.coord[currentFrame].x + decalPuce.x + offsetPanel.x,
				y: elem.coord[currentFrame].y + 3 * (decalPuce.y / 4) + offsetPanel.y
			});

			if (affichageNomLots) elem.appt.set({
				x: elem.coord[currentFrame].x + decalPuce.x + offsetPanel.x,
				y: elem.coord[currentFrame].y - decalPuce.y / 4 + offsetPanel.y
			});
		}
	});

	// if (panelOpen) {
	// 	lots.forEach(rotateLabel);
	// }

}


/****************/
/*    Moteur    */
/****************/
function launchLoadingLD(etage_string) {

	showLoader();

	if (firstLoad) {

		exportRoot = new lib.Maquette360_Canvas();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);

		window.setInterval(function () {
			// resizeCanvas();
		}, 50);

		initPanel();

		defineVariables();

		if (fluxLotsActif) { gestionFlux(); }

		if (isTriActif) {
			tri_init(lots);
		}

		if (getFavorisList().length > 0) {
			$('#fav_button_open_volet').css('display', 'flex');
		} else {
			$('#fav_button_open_volet').css('display', 'none');
		}
		stage.update();
		stage.enableMouseOver();

	}

	let etage = etages[etage_string];
	loadLD(etage.listLD, etage.prefix, exportRoot.Axo["Axo_" + etage.prefix][etage.prefix]);

}

function loadLD(theImages, etage_name, elem) {

	nbrLoaded = 0;
	// resizeImagesIn(exportRoot.Axo["Axo_"+etage_name][etage_name]);

	for (var imageToLoad = (currentFrame); imageToLoad < (currentFrame + theImages.length); imageToLoad++) {

		var imageIndex = imageToLoad;
		if (imageToLoad < imageMin) imageIndex = (imageMax + 1) + imageToLoad;
		if (imageToLoad > imageMax) imageIndex = imageToLoad - (imageMax + 1);

		// console.log(imageIndex);

		var image = new Image();
		image.src = theImages[imageIndex].src;

		var theObject = elem;
		var loadImage = new showloaded();
		loadImage.image = image;
		loadImage.element = theObject;
		loadImage.frame = imageIndex;
		loadImage.preload();

		// my_sleep(80);

	}

	// hideAxo();
	// changeEtage(currentEtage);
	// stage.update();

	// resizeAxoImages(currentEtage);
	// rescaleStage();
	// resizeCanvas();

}

var percent = 0;
function showloaded() {

	this.image;
	this.element;
	this.frame;

	this.preload = function () {
		var thisObject = this;
		$(this.image).on('load', function () {
			thisObject.load();
		});
	};

	this.load = function () {

		this.element.gotoAndStop(this.frame);

		percent = Math.round((nbrLoaded / imageMax) * 100);
		progressLoader(percent);
		let loader_elliptical_path = elliptical_arc(359 * percent / 100 + 0.9);
		$('#path_test').attr('d', loader_elliptical_path);

		nbrLoaded++;

		let bitmap = new createjs.Bitmap(this.image.src);
		this.element.getChildAt(0).image = bitmap.image;

		if (nbrLoaded == imageMax + 1) {
			// console.log('start ! ');
			if (firstLoad) {
				firstLoad = false;
				addEvents();
			}

			etages[currentEtage].LD_loaded = true;

			hideAxo();
			changeEtage(currentEtage);
			stage.update();
			eraseLoader();
		}
		this.element.gotoAndStop(currentFrame);
		resizeImagesIn(exportRoot.Axo["Axo_" + currentEtage][currentEtage]);
		stage.update();
	}
}

function loadingHD() {

	// if (etage.LD_loaded) loadHD(etage.listHD, exportRoot.Axo["Axo_"+etage.prefix][etage.prefix]);
	$('#console').html("loadingHD : " + currentEtage + "<br>");
	if (etages[currentEtage].LD_loaded) {
		loadHD();
	}

}

var loadHDFirstload = true;
function splitImageNameAndIndex(name) {
	let index = name.lastIndexOf('_');
	return [name.substr(0, index), name.substr(index + 1)];
}

let loadHDQueue = [];
function loadHD() {

	// displayLoadHDQueue();

	if (currentFrame > imageMax) currentFrame = imageMin;
	else if (currentFrame < imageMin) currentFrame = imageMax;

	if ((!etages[currentEtage].listHD[currentFrame].loaded) && (!etages[currentEtage].listHD[currentFrame].preloaded)) {

		etages[currentEtage].listHD[currentFrame].preloaded = true;

		let image = etages[currentEtage].listHD[currentFrame].preload;
		image.src = etages[currentEtage].listHD[currentFrame].src;

		interruptLoadHDQueue(currentEtage, currentFrame);
		loadHDQueue.push({ 'etage': currentEtage, 'frame': currentFrame, 'image': image });

		$(image).on('load', function () {

			let loaded_image = image.src;
			loaded_image = loaded_image.split('/');
			loaded_image = loaded_image[loaded_image.length - 1];
			loaded_image = loaded_image.split('.');
			loaded_image = loaded_image[0];

			let loaded_image_name = splitImageNameAndIndex(loaded_image);
			let loaded_image_etage_prefix = loaded_image_name[0];
			let loaded_image_index = loaded_image_name[1];

			loaded_image_index = parseInt(loaded_image_index);

			etages[loaded_image_etage_prefix].listHD[loaded_image_index].loaded = true;
			removeFromLoadHDQueue(loaded_image_etage_prefix, loaded_image_index);
			//console.log("--loaded " + loaded_image_etage_prefix + ' - ' + loaded_image_index);

		});

	} else if (etages[currentEtage].listHD[currentFrame].loaded) {

		let operate = '' + exportRoot.Axo["Axo_" + etages[currentEtage].prefix][etages[currentEtage].prefix].getChildAt(0).image != "undefined";
		$('#console').append('HD marked loaded : ' + currentFrame + '<br>' + "operate : " + operate + '<br>');

		if (operate) {
			let str = exportRoot.Axo["Axo_" + etages[currentEtage].prefix][etages[currentEtage].prefix].getChildAt(0).image.src;
			if (contains(str, 'images\/LD') && contains(str, pad(currentFrame, 3))) {
				exportRoot.Axo["Axo_" + etages[currentEtage].prefix][etages[currentEtage].prefix].getChildAt(0).image.src = etages[currentEtage].listHD[currentFrame].src;
				let tmp = etages[currentEtage].listHD[currentFrame].src.split('/');
				//$('#console').append("new- " + tmp[tmp.length - 2] + '/' + tmp[tmp.length - 1]);
			} else {
				let tmp = str.split('/');
				//$('#console').append("old- " + tmp[tmp.length - 2] + '/' + tmp[tmp.length - 1]);
			}
		}

	} else {

		$('#console').append("sheisse " + currentFrame + "<br>");
		$('#console').append("loaded : " + etages[currentEtage].listHD[currentFrame].loaded + "<br>");
		$('#console').append("preloaded : " + etages[currentEtage].listHD[currentFrame].preloaded);

	}

}

/* TODO remove */
function displayLoadHDQueue() {
	let str = "currframe : " + currentFrame + '<br>';
	str += "isProladed : " + etages[currentEtage].listHD[currentFrame].preloaded + '<br>';
	loadHDQueue.forEach(function (elem) {
		str += elem.etage + ' - ' + elem.frame + '<br>';
	});
	$('#loadHDQueueViewer').html(str);
}
function removeFromLoadHDQueue(_etage, _frame) {
	loadHDQueue.forEach(function (elem, index) {
		loadHDQueue = [...loadHDQueue.reduce((map, obj) => ((obj.etage === _etage) && (obj.frame == _frame)) ? map : map.set(obj, obj), new Map()).values()];
	});
}
function interruptLoadHDQueue(_etage, _frame) {
	loadHDQueue.forEach(function (elem, index) {
		if ((elem.etage === _etage) && (elem.frame == _frame)) {
			// do nothing
		} else {
			// interrupt HD loading :
			elem.image.src = "";
			$(elem.image).off('load');
			etages[elem.etage].listHD[elem.frame].preloaded = false;
		}
	});
	loadHDQueue = [];
}

var onImgLoad = function (selector, callback) {
	$(selector).each(function () {
		if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
			callback.apply(this);
		}
		else {
			$(this).on('load', function () {
				callback.apply(this);
			});
		}
	});
};

function hideAxo() {

	//console.log("-- hideAxo");

	for (let etage_name in etages) {
		if (etage_name !== currentEtage) {
			let etage = etages[etage_name];
			etage.easeljs_elem.visible = false;
		}
	}

	// definitionEtages.forEach(function (data) {
	// 	data.elem.visible = false;
	// });

}

function changeEtage(etage_name) {

	// resizeAxoImages(etage);
	resizeImagesIn(exportRoot.Axo["Axo_" + etage_name][etage_name]);

	exportRoot.Axo["Axo_" + etage_name].visible = true;
	// resizeAxoImages(etage);

}

function resizeImagesIn(elem) {

	
	//beaucoup de passage ici
	let operate = ('' + elem.getChildAt(0).image) != "undefined";
	if (operate) {
		let str = elem.getChildAt(0).image.src;
		if (contains(str, 'images\/LD')) {
			elem.getChildAt(0).scaleX = canvasSize.width / imageLD.width + 0.001;
			elem.getChildAt(0).scaleY = canvasSize.height / imageLD.height;
		} else {
			elem.getChildAt(0).scaleX = canvasSize.width / imageHD.width + 0.001;
			elem.getChildAt(0).scaleY = canvasSize.height / imageHD.height;
		}
	} else {
		// elem.getChildAt(0).scaleX = canvasSize.width / imageLD.width;
		// elem.getChildAt(0).scaleY = canvasSize.height / imageLD.height;
	}
}

function rotatePlans(elem) {
	if (elem.cat !== "nozone") {
		if (elem.niveau === currentEtage) {
			elem.cell.AnimPlanBT.gotoAndStop(currentFrame);
			elem.cell.AnimPlanBT.children.forEach(function (e) {
				changeGraphicPlan(e, elem);
			});
			if (elem.hidden) elem.cell.visible = false;
		}
	}

}

function changeGraphicPlan(e, elem) {

	if ((elem.type == "T1") || (elem.type == "T1D") || (elem.type == "T1B")) {
		if (e.graphics._fill != null) e.graphics._fill.style = colorT1;
	} else if ((elem.type == "T2") || (elem.type == "T2D") || (elem.type == "T2B")) {
		if (e.graphics._fill != null) e.graphics._fill.style = colorT2;
	} else if ((elem.type == "T3") || (elem.type == "T3D") || (elem.type == "T3B")) {
		if (e.graphics._fill != null) e.graphics._fill.style = colorT3;
	} else if ((elem.type == "T4") || (elem.type == "T4D") || (elem.type == "T4B")) {
		if (e.graphics._fill != null) e.graphics._fill.style = colorT4;
	} else if ((elem.type == "T5") || (elem.type == "T5D") || (elem.type == "T5B")) {
		if (e.graphics._fill != null) e.graphics._fill.style = colorT5;
	} else if ((elem.type == "T6") || (elem.type == "T6D") || (elem.type == "T6B")) {
		if (e.graphics._fill != null) e.graphics._fill.style = colorT6;
	} else if (elem.type == "ROOM") {
		if (e.graphics._fill != null) e.graphics._fill.style = colorROOM;
	}

	if (elem.cat !== "nozone") {
		if (elem.type != "ROOM") {
			if (currentPlan != null && currentPlan === elem.cell) {
				if (e.graphics._fill != null) {
					e.alpha = 0.7; // exists - Fill
				} else {
					if ((hide_panel_on_mobile) && displayIsMobile) { // Stroke
						e.graphics._stroke.style = "#666666";
						e.graphics._strokeStyle.width = 4;
					}
					e.alpha = 1.0;
				}
				if ((hide_panel_on_mobile) && displayIsMobile) {
					elem.puce.children[1].children[0].graphics._fill.style = "#ffffff";
					elem.puce.children[1].children[1].graphics._fill.style = "#797e83";
					// elem.puce.children[1].children[1].graphics._stroke.style = "#797e83";
				}
			} else {
				if (e.graphics._fill != null) {
					e.alpha = 0.5; // exists - Fill
				} else {
					if ((hide_panel_on_mobile) && displayIsMobile) { // Stroke
						e.graphics._stroke.style = "#FFFFFF";
						e.graphics._strokeStyle.width = 1;
					}
					e.alpha = 0.0;
				}
				if ((hide_panel_on_mobile) && displayIsMobile) {
					elem.puce.children[1].children[0].graphics._fill.style = "#B6B9BE";
					elem.puce.children[1].children[1].graphics._fill.style = "#ffffff";
					// elem.puce.children[1].children[1].graphics._stroke.style = "#ffffff";
				}
			}
		} else {
			if (currentPlan != null && currentPlan === elem.cell) {
				if (e.graphics._fill != null) {
					e.alpha = 0.2; // Fill	
				} else {
					e.alpha = 0.6; // Stroke
				}
			} else {
				if (e.graphics._fill != null) {
					e.alpha = 0.1; // Fill
				} else {
					e.alpha = 0.0; // Stroke
				}
			}
		}
	}

	if (elem.social) {
		if (e.graphics._fill != null) {
			e.graphics._fill.style = colorSocial;
			e.alpha = 0.9;
		}
	}

	if (elem.hidden) elem.cell.visible = false;

}

function renderPuce(elem) {
	if (!elem.social) {
		elem.puce.alpha = 1.0;
	}
}

function searchTypeLot(nom) {
	var retour = "T4";
	lots.forEach(function (item) {
		if (item.nom == nom) {
			retour = item.type;
		}
	});
	return retour;
}
function searchLotByNom(nom) {
	var retour = null;
	lots.forEach(function (item) {
		if (item.nom == nom) {
			retour = item;
		}
	});
	return retour;
}
function searchLotById(id) {
	var retour = null;
	lots.forEach(function (item) {
		if (item.id == id) {
			retour = item;
		}
	});
	return retour;
}
function searchLotIndexByNom(nom) {
	var retour = [];
	lots.forEach(function (item, index) {
		if (item.nom == nom) {
			retour.push(index);
		}
	});
	return retour;
}

/* XAV Ouverture du panel/étiquette HTML via click puce/cell */
function actionOnCell(elem) {

	console.log("actionOnCell : " + elem.nom);

	let panel = elem.cell

	if (panelOpen) {

		if (currentPlan == panel) {
			hidePanel()
			if (isEtiquetteHTML) hideEtiquetteHTML()
			currentPlan = null
			isPointerMoving = false
		} else {
			panel_lib.alpha = 0.0
			currentPlan = panel
			// let chosen_elem = null
			lots.forEach(function(lot) {
				// if (lot.cell == currentPlan) chosen_elem = lot
				renderPuce(lot)
			});
			// majDesignationPanel(chosen_elem)
			renderPuce(elem)
			majDesignationPanel(elem)
			if (isEtiquetteHTML) {
				// majEtiquetteHTML(chosen_elem)
				majEtiquetteHTML(elem)
				window.setTimeout(function() {
					displayEtiquetteHTML()
				}, 50);				
			}
			if (isEtiquetteHTML) { panel_lib.alpha = 0.0; } else { panel_lib.alpha = 1.0; }
			isPointerMoving = true
		}

	} else {

		currentPlan = panel
		if (!((hide_panel_on_mobile) && (displayIsMobile))) {
			panelOpen = true
			// let chosen_elem = null
			// lots.forEach(function(lot) {
			// 	if (lot.cell == currentPlan) chosen_elem = lot
			// });
			// majDesignationPanel(chosen_elem)
			majDesignationPanel(elem)
			if (isEtiquetteHTML) {
				// majEtiquetteHTML(chosen_elem)
				majEtiquetteHTML(elem)
				window.setTimeout(function() {
					displayEtiquetteHTML()
				}, 50)
			}
			if (isEtiquetteHTML) { panel_lib.alpha = 0.0; } else { panel_lib.alpha = 1.0; }
		} else {
			// let lot = getLotFromCurrentPanel(currentPlan)
			// if (lot !== null) {
			if (elem !== null) {
				// initFicheRecap(lot.nom)
				initFicheRecap(elem.nom)
				$('.back-results').hide()
				$('#tri_menu_gauche').addClass('open')
				$('#tri_menu_gauche').removeClass('step01').addClass('step02')
			}
		}
		isPointerMoving = true
		
	}

	animateElements(currentFrame)

}

function getLotFromCurrentPanel(currentPanel) {
	let resultat = null;
	lots.forEach(function (lot) {
		if (lot.cell === currentPanel) {
			resultat = lot;
		}
	});
	return resultat;
}

/****************************/
/*           Panel          */
/****************************/
function initPanel() {

	// Définition et ajout du panneau d'info dans la canvas
	exportRoot.Axo.panel = new lib.panel();
	exportRoot.Axo.panel.set({ name: "panel", parent: exportRoot.Axo, x: 0, y: 0 });
	exportRoot.Axo.addChild(exportRoot.Axo.panel);
	panel_lib = exportRoot.Axo.panel;
	panel_lib.alpha = 0.0;

	// Action sur les boutons du panneau et le panneau lui meme
	$(panel_lib).on('click touch', function (event) {
		clicked_object = this.name;
	});

	$(panel_lib.panel_bt_fiche).on('click touch', function (event) {
		clicked_object = this.name;
		let currentLotPanelName = panel_lib.panel_numlot_prix.panel_numlot_txt.text;
		initFicheRecap(currentLotPanelName);
		$('.back-results').hide();
		$('#tri_menu_gauche').addClass('open');
		// Restaure volet de recherche (en cas de seconde ouverture)
		$('#tri_menu_gauche').removeClass('step01').addClass('step02');
		event.stopPropagation();
	});

	$(panel_lib.panel_bt_fermer).on('click touch', function (event) {
		clicked_object = this.name;
		event.stopPropagation();
	});

	$(panel_lib.panel_bt_coeur).on('click touch', function (event) {

		clicked_object = this.name;
		let currentLotPanelName = panel_lib.panel_numlot_prix.panel_numlot_txt.text;

		let current_fav_state = getFavori(currentLotPanelName);
		current_fav_state = !current_fav_state;
		setFavori(currentLotPanelName, current_fav_state);
		event.stopPropagation();
	});

	$(panel_lib.panel_bt_coeur).hover(function () {
		panel_lib.panel_bt_coeur.gotoAndStop(1);
	}, function () {
		let currentLotPanelName = panel_lib.panel_numlot_prix.panel_numlot_txt.text;
		let current_fav_state = getFavori(currentLotPanelName);
		if (current_fav_state) {
			panel_lib.panel_bt_coeur.gotoAndStop(1);
		} else {
			panel_lib.panel_bt_coeur.gotoAndStop(0);
		}
	});

	if (isEtiquetteHTML) initEtiquetteHTML();	

}
function initEtiquetteHTML() {

	let etiquette_btn_close = document.getElementById('etiquette-btn-close');
	etiquette_btn_close.addEventListener('click', function(e) {
		hideEtiquetteHTML();
		let nom_lot_etiquette = document.getElementById('etiquette-info-nom').textContent;
		let lot_etiquette = searchLotByNom(nom_lot_etiquette);
		if ((lot_etiquette == null) || (lot_etiquette.cat !== 'nozone')) {
			currentPlan.AnimPlanBT.children.forEach(function (e) {
				renderPuce(lot_etiquette);
				changeGraphicPlan(e, currentPlan);
			});
		}
		currentPlan = null;
	});

	let etiquette_btn_favori = document.getElementById('etiquette-btn-favori');
	etiquette_btn_favori.addEventListener('click', function(e) {
		let nom_lot_etiquette = document.getElementById('etiquette-info-nom').textContent;
		let current_fav_state = getFavori(nom_lot_etiquette);
		current_fav_state = !current_fav_state;
		setFavori(nom_lot_etiquette, current_fav_state);
	});
	
	let etiquette_display_panel = document.getElementById('etiquette-display-panel');
	etiquette_display_panel.addEventListener('click', function(e) {
		let nom_lot_etiquette = document.getElementById('etiquette-info-nom').textContent;
		initFicheRecap(nom_lot_etiquette);
		$('.back-results').hide();
		$('#tri_menu_gauche').addClass('open');
		// Restaure volet de recherche (en cas de seconde ouverture)
		$('#tri_menu_gauche').removeClass('step01').addClass('step02');
	});
	
}

function majDesignationPanel(elem) {

	if (!elem.social) {
		
		if ((elem.cell === currentPlan) || ((elem.cat === "nozone") && (elem.puce === currentPlan))) {
			if (elem.prix != null) {
				panel_lib.panel_numlot_prix.set({ y: -195 });
				panel_lib.panel_numlot_prix.panel_prix_txt.visible = true;
				panel_lib.panel_numlot_prix.panel_prix_txt.text = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(elem.prix);
			} else {
				panel_lib.panel_numlot_prix.set({ y: -184 });
				panel_lib.panel_numlot_prix.panel_prix_txt.visible = false;
			}

			if (elem.orientation != null) {
				panel_lib.panel_orientation.visible = true;
				if (elem.orientation.length > 10) {
					panel_lib.panel_orientation.panel_orientation_txt.font = "14px 'Montserrat'";
					panel_lib.panel_orientation.panel_orientation_txt.lineWidth = 150;
					panel_lib.panel_orientation.panel_orientation_txt.setTransform(99, -5);
				} else {
					panel_lib.panel_orientation.panel_orientation_txt.font = "15px 'Montserrat'";
					panel_lib.panel_orientation.panel_orientation_txt.lineWidth = 95;
					panel_lib.panel_orientation.panel_orientation_txt.setTransform(99, -6);
				}
				panel_lib.panel_orientation.panel_orientation_txt.text = elem.orientation;
			} else {
				panel_lib.panel_orientation.visible = false;
			}

			switch (elem.type) {
				case "T1":
				case "T1D":
				case "T1B":
					panel_lib.panel_typo_carre.panel_typo_couleur.graphics._fill.style = colorT1;
					break;
				case "T2":
				case "T2D":
				case "T2B":
					panel_lib.panel_typo_carre.panel_typo_couleur.graphics._fill.style = colorT2;
					break;
				case "T3":
				case "T3D":
				case "T3B":
					panel_lib.panel_typo_carre.panel_typo_couleur.graphics._fill.style = colorT3;
					break;
				case "T4":
				case "T4D":
				case "T4B":
					panel_lib.panel_typo_carre.panel_typo_couleur.graphics._fill.style = colorT4;
					break;
				case "T5":
				case "T5D":
				case "T5B":
					panel_lib.panel_typo_carre.panel_typo_couleur.graphics._fill.style = colorT5;
					break;
				case "T6":
				case "T6D":
				case "T6B":
					panel_lib.panel_typo_carre.panel_typo_couleur.graphics._fill.style = colorT6;
					break;
			}

			if (!applicationFromLocalStorage) {
				if (elem.pdf == null || elem.pdf === "") {
					panel_lib.panel_plan.panel_plan_image.image.src = pdv_pas_de_plan;
				} else {
					panel_lib.panel_plan.panel_plan_image.image.src = pdv_vignette_folder + elem.pdf + ".jpg";
				}
			} else {
				panel_lib.panel_plan.panel_plan_image.image.src = "";
				panel_lib.panel_plan.panel_plan_image.visible = false;
				panel_lib.panel_plan.panel_plan_background.visible = false;
			}

			if (elem.favori == 0) {
				panel_lib.panel_bt_coeur.gotoAndStop(0);
			} else {
				panel_lib.panel_bt_coeur.gotoAndStop(1);
			}

			panel_lib.panel_typo_carre.panel_typo_txt.text = elem.type;
			panel_lib.panel_numlot_prix.panel_numlot_txt.text = elem.nom;
			panel_lib.panel_superficie.panel_superficie_txt.text = elem.surface + " M²";
			// panel_lib.panel_etage.panel_etage_txt.text = elem.niveau.toString();
			panel_lib.panel_etage.panel_etage_txt.text = getEtageDisplayName(elem.niveau.toString());

			if (isMobile()) {
				panel_lib.scaleX = 1.8;
				panel_lib.scaleY = 1.8;
			}

			elem.puce.alpha = 0.0;
		} else {
			elem.puce.alpha = 1.0;
		}
	}

	if ((elem.hidden) && (elem.cat !== "nozone")) elem.cell.visible = false;

}
function majEtiquetteHTML(elem) {

	if (elem.social) return;

	if ((elem.cat === "std") || ((elem.cat === "nozone") && (elem.puce === currentPlan)) ) {

		let etiquette_plan = document.getElementById('etiquette-plan');
		if (!applicationFromLocalStorage) {
			if (elem.pdf == null || elem.pdf === "") {
				etiquette_plan.setAttribute('src', pdv_pas_de_plan);
			} else {
				etiquette_plan.setAttribute('src', pdv_vignette_folder + elem.pdf + ".jpg");
			}
		} else {
			etiquette_plan.setAttribute('src', '');
			etiquette_plan.style.visible = "hidden";
		}

		let etiquette_info_typo = document.getElementById('etiquette-info-typo');
		etiquette_info_typo.innerHTML = elem.type;
		switch (elem.type) {
			case "T1":
			case "T1D":
			case "T1B":
				etiquette_info_typo.style.backgroundColor = colorT1;
				break;
			case "T2":
			case "T2D":
			case "T2B":
				etiquette_info_typo.style.backgroundColor = colorT2;
				break;
			case "T3":
			case "T3D":
			case "T3B":
				etiquette_info_typo.style.backgroundColor = colorT3;
				break;
			case "T4":
			case "T4D":
			case "T4B":
				etiquette_info_typo.style.backgroundColor = colorT4;
				break;
			case "T5":
			case "T5D":
			case "T5B":
				etiquette_info_typo.style.backgroundColor = colorT5;
				break;
			case "T6":
			case "T6D":
			case "T6B":
				etiquette_info_typo.style.backgroundColor = colorT6;
				break;
		}

		let etiquette_info_nom = document.getElementById('etiquette-info-nom');
		etiquette_info_nom.innerHTML = elem.nom;


		let etiquette_info_prix = document.getElementById('etiquette-info-prix');
		if (elem.prix != null) {
			etiquette_info_prix.innerHTML = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(elem.prix);
		} else {
			etiquette_info_prix.style.display = "none";
		}

		let etiquette_info_superficie = document.getElementById('etiquette-info-superficie');
		etiquette_info_superficie.innerHTML = '<span class="title">Superficie : </span>' + elem.surface + " M²";

		let etiquette_info_etage = document.getElementById('etiquette-info-etage');
		etiquette_info_etage.innerHTML = '<span class="title">Étage : </span>' + getEtageDisplayName(elem.niveau.toString());

		let etiquette_info_orientation = document.getElementById('etiquette-info-orientation');
		if (elem.orientation != null) {
			etiquette_info_orientation.style.display = "block";
			etiquette_info_orientation.innerHTML = '<span class="title">Orientation : </span>'+elem.orientation;
		} else {
			etiquette_info_orientation.style.display = "none";
		}

		let etiquette_info_sdb = document.getElementById('etiquette-info-sdb');
		if ((elem.nbre_sdb != null)&&(elem.nbre_sdb != "")) {
			etiquette_info_sdb.style.display = "block";
			etiquette_info_sdb.innerHTML = '<span class="title">Salles de bain/d\'eau : </span>'+elem.nbre_sdb;
		} else {
			etiquette_info_sdb.style.display = "none";
		}

		let etiquette_btn_favori = document.getElementById('etiquette-btn-favori');
		if (elem.favori == 0) {
			etiquette_btn_favori.classList.remove('actif');
		} else {
			etiquette_btn_favori.classList.add('actif');
		}

		
		if (isMobile()) {}
		
	} else {
		// elem.puce.alpha = 1.0;
	}

	// if ((elem.hidden) && (elem.cat !== "nozone")) elem.cell.visible = false;

}

function hidePanel() {
	lots.forEach(renderPuce);
	panelOpen = false;
	$('#planImg').attr('src', 'assets/blank.png');
	if (typeof panel_lib === 'undefined') {
		console.info('Current Panel is undefined');
	} else {
		panel_lib.alpha = 0.0;
	}
	rotatePlans(lots);
}

function hideEtiquetteHTML() {
	etiquette_html.style.visibility = "hidden";
	etiquette_html.style.zIndex = -2;
}
function displayEtiquetteHTML() {
	etiquette_html.style.visibility = "visible";
	etiquette_html.style.zIndex = 0;
	// etiquette_html.style.minWidth = "auto";
	// window.setTimeout(function() {
	// 	etiquette_html.style.minWidth = (etiquette_html.offsetWidth + 1) + "px";
	// }, 20);
}

function hidePDF() {

	lots.forEach(renderPuce);

	panelOpen = false;
	$('#planImg').attr('src', 'assets/blank.png');

	if (typeof exportRoot.Axo.AnimPanel === 'undefined') {
		//console.log('Current Panel is undefined');
	} else {
		exportRoot.Axo.AnimPanel.alpha = 0.0;
	}

	if (affPDF) $(exportRoot.Axo.AnimPanel.btPDF).unbind('click touchend');

	rotatePlans(lots);

}

function movePanel(id, panel, pos, offset) {
	
	if (panelOpen) {
		panel.x = pos.x + offset.x + arrangePanel.x;
		panel.y = pos.y + offset.y + arrangePanel.y;
		if (isEtiquetteHTML) moveEtiquetteHTML(id, pos);
		
	}
	
}

let etiquette_html = document.getElementById('etiquette');
let current_lot = null;
let etiquette_pos = { x:0, y:0 };
function moveEtiquetteHTML(id, pos) {

	// console.log('-- moveEtiquetteHTML')
	// console.log("id :", id)
	// console.log("pos :", pos)

	current_lot = getElemById(id);
	let pos_in_canvas = { x: pos.x, y: pos.y };
	let canvasCenter = { x: Math.round(canvasSize.width / 2), y: Math.round(canvasSize.height / 2) }
	
	pos_in_canvas.x += (1 - zoomValue) * (canvasCenter.x - pos_in_canvas.x);
	pos_in_canvas.y += (1 - zoomValue) * (canvasCenter.y - pos_in_canvas.y);
	
	let pos_outside_canvas = { x: 0, y: 0 };
	pos_outside_canvas.x = ((pos_in_canvas.x / canvasSize.width) * canvas_rect.w + canvas_rect.x);
	pos_outside_canvas.y = ((pos_in_canvas.y / canvasSize.height) * canvas_rect.h + canvas_rect.y);

	let etiquette_width = etiquette_html.offsetWidth;
	let etiquette_height = etiquette_html.offsetHeight;

	pos_outside_canvas.x += (- Math.round(etiquette_width / 2));
	pos_outside_canvas.y += (- etiquette_height );

	etiquette_pos.x = pos_outside_canvas.x;
	etiquette_pos.y = pos_outside_canvas.y;

	// console.log(etiquette_pos)

}

function rotateLabel(elem) {

	// console.log('-- rotateLabel')
	
	if (elem.cat !== "nozone") {
		if (elem.cell === currentPlan) movePanel(elem.id, panel_lib, elem.coord[currentFrame], offsetPanel);
		elem.cell.visible = !elem.hidden;
	} else {
		// if ((currentPlan !== null)&&(elem.puce === currentPlan)) {
		// 	movePanel(elem.id, panel_lib, elem.coord[currentFrame], offsetPanelNoZone);
		// } else {
		// 	movePanel(elem.id, panel_lib, elem.coord[currentFrame], offsetPanelNoZone);
		// }
		// if (elem.puce === currentPlan) movePanel(elem.id, panel_lib, elem.coord[currentFrame], offsetPanelNoZone);
		movePanel(elem.id, panel_lib, elem.coord[currentFrame], offsetPanelNoZone);
	}
}

/**************************/
/*    Fonctions Loader    */
/**************************/
var loader_first_display = true;
function showLoader() {
	$("#GUI-loader-container").css({ 'visibility': 'visible', 'opacity': '1' });
}
function progressLoader(percent) {
	document.getElementById('loader_text').textContent = percent + " %";
}
function eraseLoader() {

	if (loader_first_display) {
		loader_first_display = !loader_first_display;
		$('#GUI-loader-container').css('background-color', 'rgba(255, 255, 255, 0)');
		$('#GUI-loader-container').css('background-image', 'unset');
	}

	$("#GUI-loader-container").animate({ 'opacity': 0 }, 250, function () {
		$("#GUI-loader-container").css({ 'visibility': 'hidden' });
		document.getElementById('loader_text').textContent = 0 + " %";
		let loader_elliptical_path = elliptical_arc(359 * 0 / 100 + 0.9);
		$('#path_test').attr('d', loader_elliptical_path);
	});


}

/*****************************/
/*    Fonctions Lightbox     */
/*****************************/
function closeLightBox() {
	$('#GUI-lightbox').animate({ 'opacity': '0' }, 600, function () {
		$('#GUI-lightbox').css('display', 'none');
	});
}

/************************************/
/*    Fonctions Lightbox Cellule    */
/************************************/
var cellule_swiper = null;
var cellule_swipe_index = 0;
function initLightboxCellule() {

	cellule_swiper = new Swiper(('.cellule_swiper_container'), {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 0,
		containerModifierClass: 'cellule_swiper_container',
		wrapperClass: 'cellule_swiper_wrapper',
		slideClass: 'cellule_swiper_slide',
		nested: true,
		effect: 'slide',
		navigation: {
			nextEl: '.cellule-button-next',
			prevEl: '.cellule-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});

	cellule_swiper.on('update', function () {
		cellule_swiper.slideTo(cellule_swipe_index);
	});

}
function openLightboxCellule(elem, index) {

	let cellule_list = elem.cellule.split(' ');
	cellule_list.forEach(function (elem, index) {
		cellule_list[index] = elem.trim();
	});
	$('.cellule_swiper_wrapper').html("");
	cellule_swiper.slideTo(0);
	// Sous-image non affichée qui permet de sizer la popup
	document.getElementById('lightbox-cellule-img').src = "cellules/" + cellule_list[0] + ".jpg";
	cellule_list.forEach(function (elem, index_cellule) {
		$('.cellule_swiper_wrapper').append('<div class="cellule_swiper_slide"><div class="cellule_swiper_slide_contain"><img src="cellules/' + cellule_list[index_cellule] + '.jpg" class="cellule_slide_img" /></div></div>');
	});
	cellule_swipe_index = index;
	cellule_swiper.update();

	document.getElementById('lightbox-num-lot').innerHTML = elem.nom;

	$('#GUI-lightbox #lightbox-modal-cellule').css('display', 'block');
	$('#GUI-lightbox #lightbox-modal-aerien').css('display', 'none');
	$('#GUI-lightbox').css('display', 'block');
	$('#GUI-lightbox').animate({ 'opacity': '1' }, 600);
}


/************************************/
/*    Fonctions Lightbox Aerien     */
/************************************/
var aerien_swiper = null;
var aerien_swipe_index = 0;
function initLightboxAerien() {

	aerien_swiper = new Swiper(('.aerien_swiper_container'), {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 0,
		containerModifierClass: 'aerien_swiper_container',
		wrapperClass: 'aerien_swiper_wrapper',
		slideClass: 'aerien_swiper_slide',
		nested: true,
		effect: 'slide',
		navigation: {
			nextEl: '.aerien-button-next',
			prevEl: '.aerien-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});

	aerien_swiper.on('update', function () {
		aerien_swiper.slideTo(aerien_swipe_index);
	});

}
function openLightboxAerien(elem, index) {

	let aerien_list = elem.aerien.split(' ');
	aerien_list.forEach(function (elem, index) {
		aerien_list[index] = elem.trim();
	});
	$('.aerien_swiper_wrapper').html("");
	aerien_swiper.slideTo(0);
	document.getElementById('lightbox-aerien-img').src = "panos_aerien/" + aerien_list[0] + ".jpg";
	aerien_list.forEach(function (elem, index) {
		$('.aerien_swiper_wrapper').append('<div class="aerien_swiper_slide"><div class="aerien_swiper_slide_contain"><img src="panos_aerien/' + aerien_list[index] + '.jpg" class="aerien_slide_img" /></div></div>');
	});
	aerien_swipe_index = index;
	aerien_swiper.update();

	$('#GUI-lightbox #lightbox-modal-cellule').css('display', 'none');
	$('#GUI-lightbox #lightbox-modal-aerien').css('display', 'block');
	$('#GUI-lightbox').css('display', 'block');
	$('#GUI-lightbox').animate({ 'opacity': '1' }, 600);
}

/***************************************/
/*    Fonction mouvement du contenu    */
/***************************************/
var isCursorSlider = false;
var isPointerMoving = false;
function addOrbitaleGestureControler() {

	var theAxoScreen = exportRoot.Axo;

	originAxo.x = theAxoScreen.x;
	originAxo.y = theAxoScreen.y;

	/* ***************** controles axo ***************** */
	let actif = false
	let justactif = false
	let xpos
	let sensib_scale = 0.05
	let scaleMultiplier = 0.001
	let firstScaling = false
	let scale = 0
	let firstScale = 0
	let distOne = newVector2D(0, 0)
	let distTwo = newVector2D(0, 0)
	let nombreDoigtsGesture = 0
	let fingersID = new Array()

	$('#canvas').on("pointerdown", function (event) {
		console.log("pointerDown on canvas")
		nombreDoigtsGesture++
		actif = true
		justactif = true
		isPointerMoving = false
		fingersID.push(event.originalEvent.pointerId)
	});

	$('#canvas').on("pointermove", function (event) {
		// console.log("pointerMove on canvas")

		if (zoomValue > zoomMin) {
			document.getElementById('canvas').classList.add('grabbed')
		} else {
			document.getElementById('canvas').classList.remove('grabbed')
		}


		if (nombreDoigtsGesture == 1) {
			if (justactif) {
				justactif = false
				xpos = event.pageX
				clickedPos.x = event.pageX
				clickedPos.y = event.pageY
				movedAxo.x = exportRoot.Axo.x
				movedAxo.y = exportRoot.Axo.y
			}
			if (actif) {
				if (isCursorSlider) {
					moveCursor(event.pageX);
				} else if (event.pageX < (xpos - 40)) {
					xpos = event.pageX;
					imagePlus();
					isPointerMoving = true;
				} else if (event.pageX > (xpos + 40)) {
					xpos = event.pageX;
					imageMoins();
					isPointerMoving = true;
				}
				moveScreen(event.pageX, event.pageY);
			}
		}

		if (nombreDoigtsGesture == 2) {
			isPointerMoving = true;
			if (event.originalEvent.pointerId == fingersID[0]) {
				distOne = newVector2D(event.pageX, event.pageY);
			}
			if (event.originalEvent.pointerId == fingersID[1]) {
				distTwo = newVector2D(event.pageX, event.pageY);
				oldScale = scale;
				scale = calculateDistance(distOne, distTwo) * scaleMultiplier - firstScale;
				if (!firstScaling) {
					firstScaling = true;
					firstScale = scale;
				} else if (scale.toFixed(2) > sensib_scale) {
					zoomPlus();
				} else if (scale.toFixed(2) < -sensib_scale) {
					zoomMoins();
				}
			}
		}

	});

	$('#canvas').on("pointerup pointerout", function (event) {

		nombreDoigtsGesture--;
		var tempFingersID = new Array();

		fingersID.forEach(function (element) {
			if (element != event.originalEvent.pointerId) {
				tempFingersID.push(element);
			}
		});

		fingersID = tempFingersID;

		if (fingersID.length == 1) {
			firstScaling = false;
			firstScale = 0;
		}

		if (fingersID.length == 0) {
			nombreDoigtsGesture = 0;
			actif = false;
			justactif = false;
			firstScaling = false;
			firstScale = 0;
		}

	});

	$('#canvas').on("pointerup", function (event) {
		clicked_object = "canvas";
		setTimeout(function () {
			if (!isPointerMoving && panelOpen && ( (clicked_object != "panel" && clicked_object != "panel_bt_coeur" && clicked_object != "panel_bt_fiche") ||  (false) ) ) {

				console.log("HIDE PANEL from canvas pointerup");

				hidePanel();
				if (isEtiquetteHTML) hideEtiquetteHTML();

				let tmp_name = null
				if (currentPlan == null) { tmp_name = 'undefined'} else {
					tmp_name = currentPlan.name.split('_')[1];
				}
				let tmp_lot = null;
				if (tmp_name !== 'undefined') tmp_lot = searchLotByNom(tmp_name);
				if (((tmp_lot == null) || (tmp_lot.cat !== 'nozone'))&&(currentPlan !== null)) {
					currentPlan.AnimPlanBT.children.forEach(function (e) { changeGraphicPlan(e, currentPlan); });
				}
				currentPlan = null;
			}
		}, 100);
	});


	// $('#etiquette').on("pointermove", function(event) {
	// 	$('#canvas').trigger(event);
	// });

	// etiquette_html.addEventListener('pointerdown', function(e) {
	// 	if ( 
	// 		(e.target) == document.getElementById('etiquette-display-panel') ||
	// 		(e.target) == document.getElementById('etiquette-btn-close') ||
	// 		(e.target) == document.getElementById('etiquette-btn-favori')
	// 	) {
	// 		// console.log("Bouton étiquette - no proc");
	// 	} else {
	// 		// console.log(e.x + ", " + e.y);
	// 		// console.log(canvas_rect);
	// 		// console.log(canvas_rect.x + ' -- ' + e.x + ' -- ' + (canvas_rect.x + canvas_rect.w));
	// 		// console.log(canvas_rect.y + ' -- ' + e.y + ' -- ' + (canvas_rect.y + canvas_rect.h));
	// 		if ( 
	// 			( (e.x >= canvas_rect.x) && (e.x <= (canvas_rect.x + canvas_rect.w)) ) &&
	// 			( (e.y >= canvas_rect.y) && (e.y <= (canvas_rect.y + canvas_rect.h)) )
	// 		) {
	// 			console.log("Etiquette pointerDown in Canvas");
	// 			canvas.dispatchEvent(e);
	// 		} else {
	// 			console.log("Etiquette pointerDown NOT in Canvas");
	// 		}
	// 	}
	// });

	// etiquette_html.addEventListener('pointermove', function(e) {
		
	// 	if ( 
	// 		( (e.x >= canvas_rect.x) && (e.x <= (canvas_rect.x + canvas_rect.w)) ) &&
	// 		( (e.y >= canvas_rect.y) && (e.y <= (canvas_rect.y + canvas_rect.h)) )
	// 	) {
	// 		console.log("Etiquette pointerMove in Canvas");
	// 		let newEvent = e;
	// 		newEvent.srcElement = canvas;
	// 		newEvent.target = canvas;
	// 		console.log(newEvent);
	// 		// canvas.dispatchEvent(e);
	// 	} else {
	// 		console.log("Etiquette pointerMove NOT in Canvas");
	// 	}

	// });

	// etiquette_html.addEventListener('pointerup', function(e) {
		
	// 	if ( 
	// 		( (e.x >= canvas_rect.x) && (e.x <= (canvas_rect.x + canvas_rect.w)) ) &&
	// 		( (e.y >= canvas_rect.y) && (e.y <= (canvas_rect.y + canvas_rect.h)) )
	// 	) {
	// 		console.log("Etiquette pointerUp in Canvas");
	// 		canvas.dispatchEvent(e);
	// 	} else {
	// 		console.log("Etiquette pointerUp NOT in Canvas");
	// 	}

	// });

	// etiquette_html.addEventListener('pointerout', function(e) {
		
	// 	if ( 
	// 		( (e.x >= canvas_rect.x) && (e.x <= (canvas_rect.x + canvas_rect.w)) ) &&
	// 		( (e.y >= canvas_rect.y) && (e.y <= (canvas_rect.y + canvas_rect.h)) )
	// 	) {
	// 		console.log("Etiquette pointerOut in Canvas");
	// 		canvas.dispatchEvent('pointerout');
	// 	} else {
	// 		console.log("Etiquette pointerout NOT in Canvas");
	// 	}

	// });

}
function moveScreen(mousePosX, mousePosY) {

	// var theAxoScreen = exportRoot.Axo;

	// if (zoomValue > 1.0 && deplace) {
	// 	theAxoScreen.x = movedAxo.x + (mousePosX - clickedPos.x);
	// 	theAxoScreen.y = movedAxo.y + (mousePosY - clickedPos.y);
	// }

	// TODO change static canvas size 1920 * 1080 to dynamic var

	var theAxoScreen = exportRoot.Axo

	if (zoomValue > 1.0 && deplace) {

		let canvas_axo = {
			centerX: theAxoScreen.x,
			centerY: theAxoScreen.y,
			width: 1920 * theAxoScreen.scaleX,
			height: 1080 * theAxoScreen.scaleY
		}
		let next_center = {
			x: movedAxo.x + (mousePosX - clickedPos.x),
			y: movedAxo.y + (mousePosY - clickedPos.y)
		}

		if (
			((next_center.x - canvas_axo.width / 2) < 0) &&
			((next_center.x + canvas_axo.width / 2 ) > 1920)
		) {
			theAxoScreen.x = next_center.x
		}

		if (
			((next_center.y - canvas_axo.height / 2) < 0) &&
			((next_center.y + canvas_axo.height / 2 ) > 1080)
		) {
			theAxoScreen.y = next_center.y
		}

	}

}
function imagePlus() {

	if (zoomValue <= 1.05 || !deplace) {

		if (cw) {
			currentFrame = currentFrame + 1;
			if (currentFrame > imageMax) {
				currentFrame = imageMin;
			}
		} else {
			currentFrame--;
			if (currentFrame < imageMin) {
				currentFrame = imageMax;
			}
		}

		if (cwRose) {
			roseAngle = roseStartAngle + (currentFrame * pasAngle);
		} else {
			roseAngle = roseStartAngle + (currentFrame * (-1 * pasAngle));
		}

		loadingHD();
		// displayConsoleFrameInfo();

		rotateBoussole(roseAngle);
		animateElements(currentFrame);

	}
}
function imageMoins() {
	if (zoomValue <= 1.05 || !deplace) {

		if (cw) {
			currentFrame = currentFrame - 1;
			if (currentFrame < imageMin) {
				currentFrame = imageMax;
			}
		} else {
			currentFrame++;
			if (currentFrame > imageMax) {
				currentFrame = imageMin;
			}
		}

		if (cwRose) {
			roseAngle = roseStartAngle + (currentFrame * pasAngle);
		} else {
			roseAngle = roseStartAngle + (currentFrame * (-1 * pasAngle));
		}

		loadingHD();

		// displayConsoleFrameInfo();

		rotateBoussole(roseAngle);
		animateElements(currentFrame);

	}
}
function displayConsoleFrameInfo() {
	let str = "currentFrame :" + currentFrame;
	str += "<br>";
	if (etages[currentEtage].listHD[currentFrame].loaded) {
		str += "HD loaded: true";
	} else {
		str += "HD loaded: false";
	}
	$('#console').html(str);
}

/****************************/
/*    Range bar zoom axo    */
/****************************/
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'onmousewheel' in document.createElement('div') ? 'mousewheel' : 'DOMMouseScroll'
document.getElementById('canvas').addEventListener(wheelEvent, function (e) {
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.deltaY)))
	if (delta > 0) {
		zoomPlus()
	} else if (delta < 0) {
		zoomMoins()
	}
	e.preventDefault()
}, { passive: false})

function zoomPlus() {
	pinchValue += 0.025;
	zoomValue = pinchValue;
	ApplyZoomRange(pinchValue);
}
function zoomMoins() {
	pinchValue -= 0.025;
	zoomValue = pinchValue;
	ApplyZoomRange(pinchValue);
}
function ApplyZoomRange(value) {

	if (value < zoomMin) {
		value = zoomMin;
	}
	if (value > zoomMax) {
		value = zoomMax;
	}

	zoomValue = value;
	pinchValue = parseFloat(value);

	exportRoot.Axo.scaleX = value;
	exportRoot.Axo.scaleY = value;

	if (zoomValue <= 1.0) {
		exportRoot.Axo.x = originAxo.x;
		exportRoot.Axo.y = originAxo.y;
	}

}
function resetZoom() {
	if (zoomValue != zoomMin) {
		zoomValue = zoomMin
		ApplyZoomRange(zoomValue)
	}
}

/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */



/***********************************************************************************************************/
/*                                           Configuration du Tri                                          */
/***********************************************************************************************************/
function tri_init(liste_lots_appli) {

	// On élimine les doublons avec le même nom de lot (pour eviter de referencer plusieurs fois les duplex, triplex..)
	tri_lots_clean = [...liste_lots_appli.reduce((map, obj) => map.has(obj.nom) ? map : map.set(obj.nom, obj), new Map()).values()];

	// On élimine les sociaux
	tri_lots_clean = [...tri_lots_clean.reduce((map, obj) => (obj.social) ? map : map.set(obj.nom, obj), new Map()).values()];

	// On élimine les type ROOM
	tri_lots_clean = [...tri_lots_clean.reduce((map, obj) => (obj.type) === "ROOM" ? map : map.set(obj.nom, obj), new Map()).values()];

	// Liste des lots avec des surfaces valides - recupération de la valeur maximale et minimale des lots
	var tri_liste_surface = [...tri_lots_clean.reduce((map, obj) => isNaN(obj.surface) ? map : map.set(obj.nom, obj), new Map()).values()];
	tri_liste_surface = tri_liste_surface.sort(function (a, b) { return a.surface - b.surface; });
	tri_is_surface_defined = (tri_liste_surface.length > 0);
	if (tri_is_surface_defined) {
		tri_surface_min = Math.floor(tri_liste_surface[0].surface);
		tri_surface_max = Math.ceil(tri_liste_surface[tri_liste_surface.length - 1].surface);
	} else {
		console.error("/!\ Aucune surface valide");
	}

	// On récupère la liste des typologies présentes dans l'application
	tri_liste_typos = [...tri_lots_clean.reduce((map, obj) => map.has(obj.type) ? map : map.set(obj.type, { type: obj.type }), new Map()).values()];
	tri_liste_typos = tri_liste_typos.sort(function (a, b) { return a.type.localeCompare(b.type); });
	tri_liste_typos_occurences = tri_lots_clean.reduce((map, obj) => map.set(obj.type, (map.get(obj.type) || 0) + 1), new Map());

	// On recupère la liste des valeurs 'specific' référencée dans les lots
	tri_liste_specific = new Array();
	[...tri_lots_clean.reduce((map, obj) => ((obj.specific.trim() === "") || (map.has(obj.specific))) ? map : map.set(obj.specific, obj.specific), new Map()).values()].forEach(function (elem) {
		elem.split(" ").forEach(function (el) {
			if (!tri_liste_specific.find(value => value === el)) {
				tri_liste_specific.push(el);
			}
		});
	});
	tri_liste_specific = tri_liste_specific.sort(function (a, b) { return a.localeCompare(b); });

	// On recupère la liste des valeurs 'exterieur' référencée dans les lots
	tri_liste_exterieur = new Array();
	[...tri_lots_clean.reduce((map, obj) => ((obj.exterieur.trim() === "") || (map.has(obj.exterieur))) ? map : map.set(obj.exterieur, obj.exterieur), new Map()).values()].forEach(function (elem) {
		elem.split(" ").forEach(function (el) {
			if (!tri_liste_exterieur.find(value => value === el)) {
				tri_liste_exterieur.push(el);
			}
		});
	});
	tri_liste_exterieur = tri_liste_exterieur.sort(function (a, b) { return a.localeCompare(b); });

	tri_lots_favoris = new Array();

	// On modifie la mise en page de l'interface existante pour s'accorder a celle d'une orbitale tri (menu a gauche enter autre)
	// tri_modify_existant_interface();
	// On commence la configuration de l'interface avec la liste des typos et exterieur valides
	tri_init_interface();

}

function tri_init_interface() {

	// OUVERTURE FERMETURE VOLET GAUCHE
	$('#tri_button_open_volet').on('click', function () {
		// Restaure volet de recherche (en cas de seconde ouverture)
		$('#tri_menu_gauche').removeClass('step02').addClass('step01');
		$('#tri_menu_gauche').addClass('open');
		closeVideoAndGalerie();
	});
	$('#tri_button_close_volet').on('click', function () {
		tri_close_volet();
	});

	// PASSSAGE FORM STEP 2
	$('.search-submit input').on('click', function () {
		tri_check_research();
		if ((tri_selection_actuel !== null) && (tri_selection_actuel.length > 0)) {
			$('.view-tabs').show();
			tri_refresh_grille_resultats();
			displayEtapeGrille();
		}
	});

	// RETOUR FORM STEP 1
	$('#step02 a.back-search').on('click', function () {
		$('#tri_menu_gauche').removeClass('step02').addClass('step01');
		$('.view-tabs').show();
		$('.label-fiche').hide();
	});

	// RESULTS VIEW
	$('.view-tabs a').on('click', function () {
		$('.view-tabs a').removeClass('active');
		$(this).addClass('active');
	});
	$('.view-tabs a.view-grid, .view-nav a.back-results').on('click', function () {
		$('#results-view').removeClass('active-view-list').removeClass('active-view-fiche').addClass('active-view-grid');
		$('.view-tabs span.label').html('Affichage en vue grille');

		$('.view-tabs a.view-list').removeClass('active');
		$('.view-tabs a.view-grid').addClass('active');
		$('.view-tabs').show();
		$('.label-fiche').hide();
	});
	$('.view-tabs a.view-list').on('click', function () {
		$('#results-view').removeClass('active-view-grid').removeClass('active-view-fiche').addClass('active-view-list');
		$('.view-tabs span.label').html('Affichage en vue liste');
	});

	// RANGES
	$("#superficie-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [24, 500],
		change: superficie_slide_handler,
	});

	$("#price-range").slider({
		range: true,
		min: 0,
		max: 400,
		values: [45, 400],
		change: prix_slide_handler,
	});

	$('.search-by-superficie').css('display', 'block');
	if (is_price_visible) $('.search-by-price').css('display', 'block');
	if (tri_liste_specific.length == 0) $('#search-specific-group').css('display', 'none');
	

	$('#tri_nom_residence').html('<strong>' + nom_residence + '</strong>');
	$('#tri_subnom_residence').html('<strong>' + subnom_residence + '</strong>');

	/* Boutons */
	let str = "";
	tri_liste_typos.forEach(function(elem) {
		str += '<span>';
		str += '<input type="checkbox" name="search-by-type" id="type-' + elem.type + '"></input>';
		str += '<label for="type-' + elem.type + '"><span class="type">' + elem.type + '</span><span>Disponible ' + tri_liste_typos_occurences.get(elem.type) + ' lots</span></label>';
		str += '</span>';
	});
	$('#typologie_container').html(str);

	str = "";
	tri_liste_specific.forEach(function(elem) {
		str += '<span>';
		str += '<input type="checkbox" name="search-by-specific" id="' + elem + '" ';
		str += '>';
		if (elem.toLowerCase() == "brs") {
			str += '<label for="' + elem + '">' + elem + '</label>';
		} else {
			str += '<label for="' + elem + '">' + capitalize(elem) + '</label>';
		}
		str += '</span>';
	});
	$('#specific_container').html(str);

	str = "";
	tri_liste_exterieur.forEach(function(elem) {
		str += '<span>';
		str += '<input type="checkbox" name="search-by-exterieur" id="' + elem + '" ';
		// if (elem === "terrasse") str += "checked";
		str += '>';
		str += '<label for="' + elem + '">' + capitalize(elem) + '</label>';
		str += '</span>';
		// if ((elem === "terrasse")) {
		// 	tri_liste_exterieurs_selected.push(elem);
		// }
	});
	$('#exterieur_container').html(str);


	tri_liste_typos.forEach(function (elem) {
		// TODO Duplex
		$("#type-" + elem.type).click(function () {
			let type_name = $(this).attr('id').substring(5);
			if ($(this).is("[checked]")) {
				$(this).removeAttr("checked");
				tri_liste_typos_selected = tri_liste_typos_selected.filter(el => el !== type_name);
			} else {
				$(this).attr("checked", "checked");
				tri_liste_typos_selected.push(type_name);
			}
			// console.log(tri_liste_typos_selected);
			tri_check_research();
		});
	});

	tri_liste_specific.forEach(function (elem) {
		$("#" + elem).click(function () {
			let spec_name = $(this).attr('id');
			if ($(this).is("[checked]")) {
				$(this).removeAttr("checked");
				tri_liste_specific_selected = tri_liste_specific_selected.filter(el => el !== spec_name);
			} else {
				$(this).attr("checked", "checked");
				tri_liste_specific_selected.push(spec_name);
			}
			tri_check_research();
		});
	});

	tri_liste_exterieur.forEach(function (elem) {
		$("#" + elem).click(function () {
			let ext_name = $(this).attr('id');
			if ($(this).is("[checked]")) {
				$(this).removeAttr("checked");
				tri_liste_exterieurs_selected = tri_liste_exterieurs_selected.filter(el => el !== ext_name);
			} else {
				$(this).attr("checked", "checked");
				tri_liste_exterieurs_selected.push(ext_name);
			}
			tri_check_research();
		});
	});

	tri_init_input_text_search();

}

function tri_check_research() {

	let result = [];

	let one_typo_selected = false;
	for (let typo_name in tri_liste_typos_selected) {
		one_typo_selected = one_typo_selected || tri_liste_typos_selected[typo_name];
	};

	if (!one_typo_selected) {

		$('#btn_lancer_recherche').attr("value", "Sélectionnez une typologie");
		tri_selection_actuel = null;

	} else {

		tri_selection = new Array();

		// Recherche des typos sélectionnées
		tri_liste_typos_selected.forEach(function (typo) {
			tri_selection = tri_selection.concat([...tri_lots_clean.reduce((map, obj) => (obj.type !== typo) ? map : map.set(obj.nom, obj), new Map()).values()]);
		});

		// Filtre le résultat précédent avec les specific sélectionnés
		if (tri_liste_specific_selected.length > 0) {
			let tri_selection_tmp = new Array();
			tri_liste_specific_selected.forEach(function (specific) {
				tri_selection_tmp = tri_selection_tmp.concat([...tri_selection.reduce((map, obj) => (!obj.specific.includes(specific)) ? map : map.set(obj.nom, obj), new Map()).values()]);
			});
			tri_selection = tri_selection_tmp;
			tri_selection = [...tri_selection.reduce((map, obj) => (map.has(obj.nom)) ? map : map.set(obj.nom, obj), new Map()).values()];
		}

		// Filtre le résultat précédent avec les extéreurs sélectionnés
		if (tri_liste_exterieurs_selected.length > 0) {
			let tri_selection_tmp = new Array();
			tri_liste_exterieurs_selected.forEach(function (exterieur) {
				tri_selection_tmp = tri_selection_tmp.concat([...tri_selection.reduce((map, obj) => (!obj.exterieur.includes(exterieur)) ? map : map.set(obj.nom, obj), new Map()).values()]);
			});
			tri_selection = tri_selection_tmp;
			tri_selection = [...tri_selection.reduce((map, obj) => (map.has(obj.nom)) ? map : map.set(obj.nom, obj), new Map()).values()];
		}

		// Filtre le résultat précédent avec les contraintes de superficie - si aucune superficie valide on bypass ce tri
		if (tri_test_surfaces_valides(tri_selection)) {
			let superficie_min = superficie_selected[0];
			let superficie_max = superficie_selected[1];
			if (superficie_max > 100) superficie_max = 2000;
			tri_selection = [...tri_selection.reduce(
				(map, obj) => ((!isNaN(parseInt(obj.surface))) && (parseInt(obj.surface) >= superficie_min) && (parseInt(obj.surface) <= superficie_max)) ? map.set(obj.nom, obj) : map,
				new Map()
			).values()];
		}

		// Filtre le résultat précédent avec les contraintes de prix
		let prix_min = prix_selected[0];
		let prix_max = prix_selected[1];
		if (prix_max == 400000) prix_max = 2000000;
		tri_selection = [...tri_selection.reduce(
			(map, obj) => ((isNaN(parseInt(obj.prix))) || ((parseInt(obj.prix) >= prix_min) && (parseInt(obj.prix) <= prix_max))) ? map.set(obj.nom, obj) : map,
			new Map()
		).values()];

		// On tri le résultat par les noms
		tri_selection = tri_selection.sort(function (a, b) { return a.nom.localeCompare(b.nom); });

		// On met a jour le texte du bouton de recherche
		if (tri_selection.length == 0) {
			$('#btn_lancer_recherche').attr("value", "Aucun logement correspondant");
		} else if (tri_selection.length == 1) {
			$('#btn_lancer_recherche').attr("value", "Afficher le logement");
		} else {
			$('#btn_lancer_recherche').attr("value", "Afficher les " + tri_selection.length + " logements");
		}

		tri_selection_actuel = tri_selection;

	}

}

function tri_test_surfaces_valides(liste) {
	liste = [...liste.reduce(
		(map, obj) => (!isNaN(parseInt(obj.surface))) ? map.set(obj.nom, obj) : map,
		new Map()
	).values()];
	return (liste.length > 0)
}

function tri_init_input_text_search() {
	$('#tri_input_search_picto').on('click', function () {
		tri_selection_actuel = tri_proceed_input_text_search();
		if (tri_selection_actuel.length == 0) {
			$('#tri_input_search').val('');
			$('#tri_input_search').attr('placeholder', 'Pas de correspondance trouvée...');
		} else {
			tri_refresh_grille_resultats();
			displayEtapeGrille();
		}
	});
	$('#tri_input_search').on('keydown', function (e) {
		if (e.key == "Enter") {
			tri_selection_actuel = tri_proceed_input_text_search();
			if (tri_selection_actuel.length == 0) {
				$('#tri_input_search').val('');
				$('#tri_input_search').attr('placeholder', 'Pas de correspondance trouvée...');
			} else {
				tri_refresh_grille_resultats();
				displayEtapeGrille();
			}
		}
	});
}

function tri_proceed_input_text_search() {

	let saisie = $('#tri_input_search').val();
	let tmp_tri_selection = new Array();

	if ((saisie !== "") && (saisie !== "undefined")) {
		saisie = normalizeString(saisie);
		tmp_tri_selection = [...tri_lots_clean.reduce((map, obj) => (!normalizeString(obj.nom).includes(saisie)) ? map : map.set(obj.nom, obj), new Map()).values()];
	}
	return tmp_tri_selection;

}

function tri_refresh_grille_resultats() {

	// console.log("-- tri_refresh_grille_resultats");

	if (tri_selection_actuel.length > 1) {
		$('#nombre_resultats').html(tri_selection_actuel.length + " logements");
	} else {
		$('#nombre_resultats').html(tri_selection_actuel.length + " logement");
	}


	let str_grille = "";
	let str_liste = "";

	str_liste = '<table width="100%" cellpadding="0" cellspacing="0">';
	str_liste += '<tr>';
	str_liste += '<th></th>';
	str_liste += '<th></th>';
	str_liste += '<th>Superficie</th>';
	str_liste += '<th>&Eacute;tage</th>';
	// str_liste += '<th>Orientation</th>';
	if (is_price_visible) str_liste += '<th>Prix</th>';
	str_liste += '<th></th>';
	str_liste += '</tr>';

	tri_selection_actuel.forEach(function (result_elem, result_index) {

		let etage_name = getEtageDisplayName(result_elem.niveau);
		if (result_index == 0) {
			str_grille += '<div class="results-grid-view-item mb" id="results-grid-view-01">';
		} else {
			str_grille += '<div class="results-grid-view-item mb">';
		}

		str_grille += '<div class="results-grid-view-item-visu">';
		if (result_elem.pdf == null || result_elem.pdf === "") {
			str_grille += '<img src="' + pdv_pas_de_plan + '" width="100%" alt="" draggable="false">';
		} else {
			str_grille += '<img src="PDV/Vignettes/LD/' + result_elem.nom + '.jpg" width="100%" alt="" draggable="false">';
		}
		str_grille += '</div>';
		str_grille += '<div class="results-grid-view-item-content">';
		str_grille += '<div class="block-title">';
		if (result_elem.type.length <= 2) {
			str_grille += '<span class="type type-' + result_elem.type + '">' + result_elem.type + '</span>';
		} else {
			str_grille += '<span class="type type-' + result_elem.type + ' large">' + result_elem.type + '</span>';
		}

		str_grille += '<p class="title"><strong>' + result_elem.nom + '</strong>';
		if (is_price_visible) str_grille += '<br>' + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(result_elem.prix);
		str_grille += '</p>';
		str_grille += '</div>';
		str_grille += '<p class="detail">';
		str_grille += 'Superficie : ' + result_elem.surface + 'm2<br>';
		str_grille += 'Étage : ' + etage_name + '<br>';
		str_grille += '</p>';
		str_grille += '<a href="#" class="view-fiche" id="fiche_' + result_elem.nom + '">Fiche détaillée</a>';
		str_grille += '</div>';
		str_grille += '</div>';

		str_liste += '<tr>';
		str_liste += '<td class="type type-' + result_elem.type + '">' + result_elem.type + '</td>';
		str_liste += '<td><strong>' + result_elem.nom + '</strong></td>';
		str_liste += '<td>' + result_elem.surface + ' M²</td>';
		str_liste += '<td>' + etage_name + '</td>';
		if (is_price_visible) str_liste += '<td>' + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(result_elem.prix); + '</td>';
		str_liste += '<td class="action"><a href="#" class="view-fiche" id="fiche_' + result_elem.nom + '">Fiche</a></td>';
		str_liste += '</tr>';

	});

	$('#results-grid-view').html(str_grille);
	$('#results-list-view').html(str_liste);


	$('.view-fiche').on('click', function () {

		console.log($(this));
		let tmp_nom_lot = $(this).attr("id").substring(6);
		console.log(".view-fiche lot : " + tmp_nom_lot);
		initFicheRecap(tmp_nom_lot);

		let lot_choisi = searchResultByName(lots, tmp_nom_lot);

		if (lot_choisi.niveau !== currentEtage) {
			$('#bt_' + lot_choisi.niveau).trigger('click', "not_close_volet");
		}
		window.setTimeout(function () {
			$(lot_choisi.cell).trigger('click');
		}, 100);

	});

	// Scrollbar grille/liste redesignée pour desktop ou native pour mobile
	if (!displayIsMobile) {

		$('#tri_volet_content_step02_grid').attr('class', 'xCustomScroll');

		$('#tri_volet_content_step02_list').attr('class', 'xCustomScroll');
	}


}

function displayEtapeGrille() {
	// Restaure état vue grille (en cas de seconde ouverture)
	$('#results-view').removeClass('active-view-list').removeClass('active-view-fiche').addClass('active-view-grid');
	$('.view-tabs span.label').html('Affichage en vue grille');
	$('.view-tabs a.view-list').removeClass('active');
	$('.view-tabs a.view-grid').addClass('active');
	// Changement effectif d'affichage  vers liste / grille
	$('.back-results').show();
	$('.label-fiche').hide();
	$('#tri_menu_gauche').removeClass('step01').addClass('step02');
}

var fiche_swiper = null;
function initFicheRecap(nom_lot) {

	console.log("-- initFicheRecap");

	let tmp_result = searchResultByName(lots, nom_lot);
	if (tmp_result != null) {

		$('#fiche_titre_lot').html(tmp_result.nom);

		let tmp_str = "";
		tmp_str += '<span class="type type-' + tmp_result.type + '">' + tmp_result.type + '</span>';
		tmp_str += '<p>';
		tmp_str += '<strong>' + tmp_result.nom + '</strong>';
		if (tmp_result.prix !== null) tmp_str += '<br>' + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(tmp_result.prix);
		tmp_str += '</p>';
		$('#result_fiche_header').html(tmp_str);

		tmp_str = "";
		tmp_str += "Appartement ";
		switch (tmp_result.type) {
			case 'T1': tmp_str += "1 pièce"; break;
			case 'T1D': tmp_str += "1 pièces duplex"; break;
			case 'T1B': tmp_str += "1 pièces bis"; break;
			case 'T2': tmp_str += "2 pièces"; break;
			case 'T2D': tmp_str += "2 pièces duplex"; break;
			case 'T2B': tmp_str += "2 pièces bis"; break;
			case 'T3': tmp_str += "3 pièces"; break;
			case 'T3D': tmp_str += "3 pièces duplex"; break;
			case 'T3B': tmp_str += "3 pièces bis"; break;
			case 'T4': tmp_str += "4 pièces"; break;
			case 'T4D': tmp_str += "4 pièces duplex"; break;
			case 'T4B': tmp_str += "4 pièces bis"; break;
			case 'T5': tmp_str += "5 pièces"; break;
			case 'T5D': tmp_str += "5 pièces duplex"; break;
			case 'T5B': tmp_str += "5 pièces bis"; break;
			case 'T6': tmp_str += "6 pièces"; break;
			case 'T6D': tmp_str += "6 pièces duplex"; break;
			case 'T6B': tmp_str += "6 pièces bis"; break;
			case 'T7': tmp_str += "7 pièces"; break;
			case 'T7D': tmp_str += "7 pièces duplex"; break;
			case 'T8': tmp_str += "8 pièces"; break;
			case 'T8D': tmp_str += "8 pièces duplex"; break;
			case 'T9': tmp_str += "9 pièces"; break;
			case 'T9D': tmp_str += "9 pièces duplex"; break;
		}

		if (tmp_result.batiment !== null) {
			tmp_str += "<br>";
			tmp_str += "Bâtiment " + tmp_result.batiment;
		}
		$('#result_fiche_detail_typo').html(tmp_str);


		tmp_str = "";
		tmp_str += "<strong>Surface :</strong> " + tmp_result.surface + " m²<br>";
		if ((tmp_result.surface_annexe !== null) && (tmp_result.surface_annexe !== "xx.xx"))
			tmp_str += "<strong>Surface annexe :</strong> " + tmp_result.surface_annexe + " m²<br>";
		tmp_str += "<strong>Étage :</strong> " + getEtageDisplayName(tmp_result.niveau) + "<br>";
		if (tmp_result.orientation !== null)
			tmp_str += "<strong>Orientation :</strong> " + tmp_result.orientation + "<br>";
		if (tmp_result.nbre_chambres !== null) {
			if (tmp_result.nbre_chambres !== 0) tmp_str += "<strong>Chambres :</strong> " + tmp_result.nbre_chambres + "<br>";
		} else {
			switch (tmp_result.type) {
				case 'T2': case 'T2D': case 'T2B': tmp_str += "<strong>Chambres :</strong> 1<br>"; break;
				case 'T3': case 'T3D': case 'T3B': tmp_str += "<strong>Chambres :</strong> 2<br>"; break;
				case 'T4': case 'T4D': case 'T4B': tmp_str += "<strong>Chambres :</strong> 3<br>"; break;
				case 'T5': case 'T5D': case 'T5B': tmp_str += "<strong>Chambres :</strong> 4<br>"; break;
				case 'T6': case 'T6D': case 'T6B': tmp_str += "<strong>Chambres :</strong> 5<br>"; break;
				case 'T7': case 'T7D': case 'T7B': tmp_str += "<strong>Chambres :</strong> 6<br>"; break;
				case 'T8': case 'T8D': case 'T8B': tmp_str += "<strong>Chambres :</strong> 7<br>"; break;
				case 'T9': case 'T9D': case 'T9B': tmp_str += "<strong>Chambres :</strong> 8<br>"; break;
			}
		}
		if ((tmp_result.nbre_sdb !== null) && (tmp_result.nbre_sdb > 0))
			tmp_str += "<strong>Salles de bain/d\'eau :</strong> " + tmp_result.nbre_sdb + "<br>";
		if ((tmp_result.specific !== null) && (tmp_result.specific.trim() !== "")) {
			tmp_str += "<strong>Particularité :</strong> ";
			let spec_result = tmp_result.specific.trim().split(" ");
			spec_result.forEach(function(spec, specindex) {
				if (spec.toLowerCase() == "brs") {
					tmp_str += spec;
				} else {
					tmp_str += capitalize(spec);
				}
				if (specindex < spec_result.length - 1) tmp_str += ", ";
			});
			tmp_str += "<br>";
		}

			
		$('#result_fiche_detail_divers').html(tmp_str);

		$('#fiche_cellule_axo').css({ 'visibility': 'hidden', 'z-index': '1' });


		initFicheResultButtons(tmp_result);

		if (tri_fiche_recap_first_display) {
			fiche_swiper = new Swiper(('#fiche_swiper_container'), {
				speed: 400,
				slidesPerView: 1,
				spaceBetween: 0,
				nested: false,
				effect: 'slide',
				centeredSlides: true,
				direction: 'horizontal',
				navigation: {
					nextEl: '.fiche-button-next',
					prevEl: '.fiche-button-prev',
				},
			});
			tri_fiche_recap_first_display = false;

			fiche_swiper.on('slideChange', function(e) {
				let nature_slide = fiche_swiper.slides[fiche_swiper.activeIndex].getAttribute('nature');
				switch (nature_slide) {
					case "plan_pdf" : 
						setResultFicheBtnActive(document.getElementById('result_fiche_btn_plan_simple'));
						break;
					case "cellule2d" : 
						setResultFicheBtnActive(document.getElementById('result_fiche_btn_plan_3D'));
						break;
					case "aerien" : 
						setResultFicheBtnActive(document.getElementById('result_fiche_btn_vue_etage'));
						break;
				}
			});
		}
		initFicheResultSlideShow(tmp_result);


		$('#results-view').removeClass('active-view-list').removeClass('active-view-grid').addClass('active-view-fiche');
		$('.view-tabs span.label').html('Affichage en vue grille');
		$('.view-tabs').hide();
		$('.label-fiche').show();

		window.setTimeout(function () {
			$('#fiche_swiper_container').css('display', 'block');
			$('#fiche_swiper_container').animate({ 'opacity': '1' }, 500);
			// fiche_swiper.update();
		}, 300);



	}
}

function initFicheResultButtons(elem) {
	let tmp_str = "";
	// Telecharger
	if ((elem.pdf !== null) && (elem.pdf !== "")) {
		tmp_str += '<li id="result_fiche_btn_telecharger">';
		// tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 384 512" width="17" height="22" class="fill-dark">';
		// tmp_str += '<path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"/>';
		// tmp_str += '</svg></span>';
		tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="22" height="22" class="fill-dark">';
		tmp_str += '<path d="M10.48,11c-.21-.69-.21-2.02-.09-2.02.36,0,.33,1.59.09,2.02ZM10.41,13.03c-.33.87-.74,1.86-1.22,2.69.79-.3,1.68-.74,2.7-.94-.55-.41-1.07-1.01-1.48-1.75ZM6.36,18.39s.57-.23,1.5-1.73c-.29.27-1.25,1.05-1.5,1.73ZM13.32,6.88h5.84v14.09c0,.57-.46,1.03-1.03,1.03H3.69c-.57,0-1.03-.46-1.03-1.03V1.03c0-.57.46-1.03,1.03-1.03h8.59v5.84c0,.57.46,1.03,1.03,1.03ZM12.98,14.26c-.86-.52-1.43-1.25-1.83-2.31.19-.79.5-2,.27-2.76-.2-1.26-1.82-1.14-2.05-.29-.21.79-.02,1.89.35,3.31-.5,1.19-1.23,2.78-1.75,3.69,0,0,0,0,0,0-1.16.6-3.16,1.91-2.34,2.92.24.3.69.43.92.43.77,0,1.53-.77,2.63-2.66,1.11-.37,2.32-.82,3.39-1,.93.51,2.02.84,2.75.84,1.25,0,1.34-1.38.85-1.86-.6-.58-2.33-.42-3.16-.31ZM18.86,4.51L14.65.3c-.19-.19-.46-.3-.73-.3h-.26v5.5h5.5v-.26c0-.27-.11-.53-.3-.73ZM15.68,15.48c.18-.12-.11-.51-1.84-.39,1.59.68,1.84.39,1.84.39Z"/>';
		tmp_str += '</svg></span>';
		tmp_str += '<span class="label">Télécharger la fiche</span>';
		tmp_str += '</a></li>';

		tmp_str += '<li id="result_fiche_btn_plan_simple" class="active">';
		// tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 384 512" width="17" height="22" class="fill-dark">';
		// tmp_str += '<path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"/>';
		// tmp_str += '</svg></span>';
		tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="22" height="22" class="fill-dark">';
		tmp_str += '<path d="M10.48,11c-.21-.69-.21-2.02-.09-2.02.36,0,.33,1.59.09,2.02ZM10.41,13.03c-.33.87-.74,1.86-1.22,2.69.79-.3,1.68-.74,2.7-.94-.55-.41-1.07-1.01-1.48-1.75ZM6.36,18.39s.57-.23,1.5-1.73c-.29.27-1.25,1.05-1.5,1.73ZM13.32,6.88h5.84v14.09c0,.57-.46,1.03-1.03,1.03H3.69c-.57,0-1.03-.46-1.03-1.03V1.03c0-.57.46-1.03,1.03-1.03h8.59v5.84c0,.57.46,1.03,1.03,1.03ZM12.98,14.26c-.86-.52-1.43-1.25-1.83-2.31.19-.79.5-2,.27-2.76-.2-1.26-1.82-1.14-2.05-.29-.21.79-.02,1.89.35,3.31-.5,1.19-1.23,2.78-1.75,3.69,0,0,0,0,0,0-1.16.6-3.16,1.91-2.34,2.92.24.3.69.43.92.43.77,0,1.53-.77,2.63-2.66,1.11-.37,2.32-.82,3.39-1,.93.51,2.02.84,2.75.84,1.25,0,1.34-1.38.85-1.86-.6-.58-2.33-.42-3.16-.31ZM18.86,4.51L14.65.3c-.19-.19-.46-.3-.73-.3h-.26v5.5h5.5v-.26c0-.27-.11-.53-.3-.73ZM15.68,15.48c.18-.12-.11-.51-1.84-.39,1.59.68,1.84.39,1.84.39Z"/>';
		tmp_str += '</svg></span>';
		tmp_str += '<span class="label">Plan de vente</span>';
		tmp_str += '</a></li>';
	}
	// Plan 3D
	if ((elem.cellule !== null) && (elem.cellule !== "")) {
		tmp_str += '<li id="result_fiche_btn_plan_3D">';
		// tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 512 512" width="22" height="22" class="fill-dark">';
		// tmp_str += '<path d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"/>';
		tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="22" height="22" class="fill-dark">';
		tmp_str += '<path d="M10.25,1.22L2.06,4.29c-.74.28-1.22.98-1.22,1.77v8.86c0,.72.41,1.37,1.04,1.69l8.19,4.09c.53.27,1.16.27,1.69,0l8.19-4.09c.64-.32,1.04-.98,1.04-1.69V6.06c0-.79-.49-1.49-1.22-1.77L11.58,1.22c-.43-.17-.9-.17-1.33,0ZM10.91,3.66l7.56,2.83v.04l-7.56,3.07-7.56-3.07v-.04s7.56-2.83,7.56-2.83ZM12.17,17.68v-5.86l6.3-2.56v5.27l-6.3,3.15Z" />';
		tmp_str += '</svg></span>';
		tmp_str += '<span class="label">Plan 3D</span>';
		tmp_str += '</a></li>';
	}
	// Plan 3D Axo
	if ((elem.cellule_axo !== null) && (elem.cellule_axo !== "")) {
		tmp_str += '<li id="result_fiche_btn_plan_axo">';
		// tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 512 512" width="22" height="22" class="fill-dark">';
		// tmp_str += '<path d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"/>';
		tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="22" height="22" class="fill-dark">';
		tmp_str += '<path d="M10.25,1.22L2.06,4.29c-.74.28-1.22.98-1.22,1.77v8.86c0,.72.41,1.37,1.04,1.69l8.19,4.09c.53.27,1.16.27,1.69,0l8.19-4.09c.64-.32,1.04-.98,1.04-1.69V6.06c0-.79-.49-1.49-1.22-1.77L11.58,1.22c-.43-.17-.9-.17-1.33,0ZM10.91,3.66l7.56,2.83v.04l-7.56,3.07-7.56-3.07v-.04s7.56-2.83,7.56-2.83ZM12.17,17.68v-5.86l6.3-2.56v5.27l-6.3,3.15Z" />';
		tmp_str += '</svg></span>';
		tmp_str += '<span class="label">Plan 3D 360°</span>';
		tmp_str += '</a></li>';
	}
	// Vue d'étage
	if ((elem.aerien !== null) && (elem.aerien !== "")) {
		tmp_str += '<li id="result_fiche_btn_vue_etage">';
		// tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 448 512" width="19" height="22" class="fill-dark">';
		// tmp_str += '<path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>';
		tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="22" height="22" class="fill-dark">';
		tmp_str += '<path d="M19.9,20.5h-.85V1.16c0-.56-.46-1.02-1.02-1.02H3.79c-.56,0-1.02.46-1.02,1.02v19.34h-.85c-.28,0-.51.23-.51.51v.85h19v-.85c0-.28-.23-.51-.51-.51ZM6.84,3.37c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7ZM6.84,7.44c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7ZM9.05,13.71h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7c0,.28-.23.51-.51.51ZM12.27,20.5h-2.71v-3.56c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v3.56ZM14.98,13.21c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7ZM14.98,9.13c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7ZM14.98,5.06c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7Z" />';
		tmp_str += '</svg></span>';
		tmp_str += '<span class="label">Vue d\'étage</span>';
		tmp_str += '</a></li>';
	}
	// Vue d'étage 360
	if ((elem.aerien360 !== null) && (elem.aerien360 !== "")) {
		tmp_str += '<li id="result_fiche_btn_vue_etage_360">';
		// tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 448 512" width="19" height="22" class="fill-dark">';
		// tmp_str += '<path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>';
		tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="22" height="22" class="fill-dark">';
		tmp_str += '<path d="M19.9,20.5h-.85V1.16c0-.56-.46-1.02-1.02-1.02H3.79c-.56,0-1.02.46-1.02,1.02v19.34h-.85c-.28,0-.51.23-.51.51v.85h19v-.85c0-.28-.23-.51-.51-.51ZM6.84,3.37c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7ZM6.84,7.44c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7ZM9.05,13.71h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7c0,.28-.23.51-.51.51ZM12.27,20.5h-2.71v-3.56c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v3.56ZM14.98,13.21c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7ZM14.98,9.13c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7ZM14.98,5.06c0,.28-.23.51-.51.51h-1.7c-.28,0-.51-.23-.51-.51v-1.7c0-.28.23-.51.51-.51h1.7c.28,0,.51.23.51.51v1.7Z" />';
		tmp_str += '</svg></span>';
		tmp_str += '<span class="label">Vue d\'étage 360°</span>';
		tmp_str += '</a></li>';
	}
	// Visite 360
	if ((elem.visite360 !== null) && (elem.visite360 !== "")) {
		tmp_str += '<li id="result_fiche_btn_visite_360">';
		// tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="21" height="21" class="fill-dark">';
		// tmp_str += '<path d="M19.009,3.799c0-.118-.034-.228-.083-.33-.009-.018-.015-.035-.025-.052-.055-.094-.128-.175-.218-.239-.008-.006-.011-.016-.019-.021-.011-.007-.025-.006-.037-.013-.031-.018-.058-.042-.092-.056L11.286,.06c-.192-.08-.407-.08-.598,.001L3.552,3.09c-.032,.014-.059,.036-.088,.054-.011,.007-.026,.006-.037,.013-.008,.005-.011,.016-.019,.021-.09,.065-.164,.145-.218,.24-.01,.017-.016,.034-.024,.051-.049,.102-.083,.212-.083,.33,0,0,0,0,0,0V12.127c0,.31,.186,.59,.472,.711l7.193,3.028c.037,.015,.077,.008,.115,.018,.062,.016,.119,.028,.183,.028,.065,0,.123-.013,.186-.029,.038-.009,.077-.002,.114-.017l7.193-3.028c.286-.121,.472-.401,.472-.711V3.802s0-.002,0-.002ZM10.991,1.606l5.247,2.193-5.22,2.181L5.832,3.796,10.991,1.606Zm-6.367,3.357l5.651,2.399v6.633l-5.651-2.38V4.963Zm12.844,6.652l-5.651,2.38V7.339l5.651-2.379v6.655Z" />';
		// tmp_str += '<path d="M18.98,15.051c.548,.219,.987,.455,1.288,.719,.156,.138,.283,.26,.283,.414,0,.117-.084,.216-.188,.323-.212,.22-.527,.418-.92,.607-1.404,.677-3.699,1.157-6.389,1.321-.424,.026-.748,.392-.722,.816,.027,.424,.392,.748,.817,.722,3.457-.211,6.308-.951,7.713-1.895,.839-.563,1.231-1.238,1.231-1.895,0-.452-.175-.9-.549-1.317-.405-.45-1.081-.885-1.991-1.247-.395-.158-.844,.035-1.002,.43-.157,.396,.035,.844,.431,1.002h0Z" />';
		// tmp_str += '<path d="M10.603,18.853l-1.878-2.218c-.275-.325-.761-.365-1.086-.089-.325,.274-.365,.761-.091,1.086h0s.624,.737,.624,.737c-2.314-.207-4.273-.652-5.524-1.255-.393-.189-.708-.387-.92-.607-.104-.107-.188-.206-.188-.323,0-.154,.126-.276,.283-.414,.3-.264,.74-.5,1.288-.719,.396-.158,.588-.606,.431-1.002-.158-.395-.607-.588-1.002-.43-.91,.363-1.586,.797-1.991,1.247-.374,.417-.549,.865-.549,1.317,0,.657,.392,1.332,1.231,1.895,1.296,.871,3.832,1.563,6.932,1.831l-.864,.731c-.325,.274-.366,.761-.09,1.086,.274,.325,.761,.365,1.086,.09l2.217-1.878c.325-.275,.366-.761,.09-1.086Z" />';
		tmp_str += '<a href="#"><span class="picto"><svg viewBox="0 0 22 22" width="22" height="22" class="fill-dark">';
		tmp_str += '<path d="M17.99,4.6c0-.1-.03-.2-.07-.29,0-.02-.01-.03-.02-.05-.05-.08-.11-.16-.19-.21,0,0,0-.01-.02-.02,0,0-.02,0-.03-.01-.03-.02-.05-.04-.08-.05l-6.45-2.69c-.17-.07-.36-.07-.53,0l-6.35,2.69s-.05.03-.08.05c0,0-.02,0-.03.01,0,0,0,.01-.02.02-.08.06-.15.13-.19.21,0,.02-.01.03-.02.05-.04.09-.07.19-.07.29h0v7.41c0,.28.17.52.42.63l6.4,2.69s.07,0,.1.02c.06.01.11.02.16.02s.11-.01.17-.03c.03,0,.07,0,.1-.02l6.4-2.69c.25-.11.42-.36.42-.63v-7.4h0s0,0,0,0ZM10.86,2.65l4.67,1.95-4.64,1.94-4.61-1.94,4.59-1.95ZM5.2,5.63l5.03,2.13v5.9l-5.03-2.12s0-5.92,0-5.92ZM16.62,11.55l-5.03,2.12v-5.92l5.03-2.12v5.92Z" />';
		tmp_str += '<path d="M17.97,14.6c.49.19.88.4,1.15.64.14.12.25.23.25.37,0,.1-.07.19-.17.29-.19.2-.47.37-.82.54-1.25.6-3.29,1.03-5.68,1.17-.38.02-.67.35-.64.73.02.38.35.67.73.64,3.07-.19,5.61-.85,6.86-1.69.75-.5,1.09-1.1,1.09-1.69,0-.4-.16-.8-.49-1.17-.36-.4-.96-.79-1.77-1.11-.35-.14-.75.03-.89.38-.14.35.03.75.38.89h0Z" />';
		tmp_str += '<path d="M10.52,17.98l-1.67-1.97c-.24-.29-.68-.32-.97-.08-.29.24-.32.68-.08.97h0l.55.66c-2.06-.18-3.8-.58-4.91-1.12-.35-.17-.63-.34-.82-.54-.09-.1-.17-.18-.17-.29,0-.14.11-.25.25-.37.27-.23.66-.44,1.15-.64.35-.14.52-.54.38-.89-.14-.35-.54-.52-.89-.38-.81.32-1.41.71-1.77,1.11-.33.37-.49.77-.49,1.17,0,.58.35,1.18,1.09,1.69,1.15.77,3.41,1.39,6.16,1.63l-.77.65c-.29.24-.33.68-.08.97.24.29.68.32.97.08l1.97-1.67c.29-.24.33-.68.08-.97h0Z" />';
		tmp_str += '</svg></span>';
		tmp_str += '<span class="label">Visite virtuelle</span>';
		tmp_str += '</a></li>';
	}
  
	// Favoris
	if (true) {
		tmp_str += '<li id="result_fiche_btn_favori">';
		tmp_str += '<a><span class="picto"><svg viewBox="0 0 496 512" width="21" height="22" id="result_fiche_btn_favori_picto">';
		tmp_str += '<circle cx="248" cy="256" r="207" style="fill: #FFFFFF" />';
		tmp_str += '<path style="fill: ';
		if (getFavori(elem.nom)) {
			tmp_str += '#d36464';
		} else {
			tmp_str += '#000000';
		}
		tmp_str += '" d="M248,8C111,8,0,119,0,256s111,248,248,248,248-111,248-248S385,8,248,8Zm123.5,272.3l-110.6,114.2c-7.1,7.4-18.7,7.4-25.9,0l-110.5-114.2c-32.1-33.2-30.2-88.2,5.7-118.8,31.3-26.7,77.9-21.9,106.6,7.7l11.3,11.6,11.3-11.6c28.7-29.6,75.3-34.4,106.6-7.7,35.8,30.6,37.7,85.6,5.5,118.8Z"/>';
		tmp_str += '</svg></span>';
		if (getFavori(elem.nom)) {
			tmp_str += '<span class="label">Retirer de mes coups de coeur</span>';
		} else {
			tmp_str += '<span class="label">Ajouter à mes coups de coeur</span>';
		}
		tmp_str += '</a></li>';
	}
	$("#result_fiche_btn_list").html(tmp_str);

	// Reset des affichages supp
	$('#fiche_cellule_axo').css({'visibility': 'hidden', 'z-index': '1'	});
	$('#fiche_krpano_visite').css({'visibility': 'hidden', 'z-index': '1' });
	$('#fiche_krpano_aerien').css({'visibility': 'hidden', 'z-index': '1' });

	// Click events des boutons de la fiche récap
	let tri_volet_content_step02_fiche_scrollContent = document.getElementById('tri_volet_content_step02_fiche_scrollContent');
	let asset_viewer = document.getElementById('asset_viewer');

	if (elem.aerien !== null) {
		$('#result_fiche_btn_vue_etage').off("click");
		$('#result_fiche_btn_vue_etage').on("click", function () {
			$('#fiche_cellule_axo').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_krpano_aerien').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_krpano_visite').css({ 'visibility': 'hidden', 'z-index': '1' });
			setResultFicheBtnActive(document.getElementById('result_fiche_btn_vue_etage'));
			tri_volet_content_step02_fiche_scrollContent.scrollTo({
				top: asset_viewer.offsetTop,
				behavior: 'smooth'
			});
			fiche_swiper.slideTo(current_fiche_result_cellule_index);
			fiche_swiper.slideTo(current_fiche_result_aerien_index);
		});
	}
	if ((elem.aerien360 !== null)&&(elem.aerien360 !== "")) {
		$('#result_fiche_btn_vue_etage_360').off("click");
		$('#result_fiche_btn_vue_etage_360').on("click", function () {
			if (!$('#fiche_krpano_aerien_iframe').attr('src').includes(elem.aerien360))
				$('#fiche_krpano_aerien_iframe').attr('src', elem.aerien360);
			$('#fiche_cellule_axo').css({'visibility': 'hidden', 'z-index': '1'	});
			$('#fiche_krpano_visite').css({'visibility': 'hidden', 'z-index': '1'	});
			$('#fiche_krpano_aerien').css({'visibility': 'visible', 'z-index': '3' });
			setResultFicheBtnActive(document.getElementById('result_fiche_btn_vue_etage_360'));
			tri_volet_content_step02_fiche_scrollContent.scrollTo({
				top: asset_viewer.offsetTop,
				behavior: 'smooth'
			});
		});

		$('#fiche_krpano_aerien_expand').off("click");
		$('#fiche_krpano_aerien_expand').on("click", function() {
			window.open(elem.aerien360, '_blank').focus();
		});
	}
	if (elem.cellule !== null) {
		$('#result_fiche_btn_plan_3D').off("click");
		$('#result_fiche_btn_plan_3D').on("click", function () {
			$('#fiche_cellule_axo').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_krpano_aerien').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_krpano_visite').css({ 'visibility': 'hidden', 'z-index': '1' });
			setResultFicheBtnActive(document.getElementById('result_fiche_btn_plan_3D'));
			tri_volet_content_step02_fiche_scrollContent.scrollTo({
				top: asset_viewer.offsetTop,
				behavior: 'smooth'
			});
			fiche_swiper.slideTo(current_fiche_result_cellule_index);
		});
	}
	if (elem.cellule_axo !== null) {
		$('#result_fiche_btn_plan_axo').off("click");
		$('#result_fiche_btn_plan_axo').on("click", function () {
			if (!$('#fiche_cellule_axo_iframe').attr('src').includes(elem.cellule_axo))
				$('#fiche_cellule_axo_iframe').attr('src', "axo/" + elem.cellule_axo + "/index.html");
			$('#fiche_krpano_aerien').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_krpano_visite').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_cellule_axo').css({ 'visibility': 'visible', 'z-index': '3' });
			setResultFicheBtnActive(document.getElementById('result_fiche_btn_plan_axo'));
			tri_volet_content_step02_fiche_scrollContent.scrollTo({
				top: asset_viewer.offsetTop,
				behavior: 'smooth'
			});
		});

		$('#fiche_cellule_axo_expand').off("click");
		$('#fiche_cellule_axo_expand').on("click", function() {
			window.open("axo/" + elem.cellule_axo + "/index.html", '_blank').focus();
		});
	}
	if (elem.pdf !== null) {
		$('#result_fiche_btn_telecharger').off("click");
		$('#result_fiche_btn_telecharger').on("click", function () {
			window.open('PDV/' + elem.pdf + '.pdf', 'Plan PDF', 'resizable=yes,scrollbars=yes,status=yes');
		});

		$('#result_fiche_btn_plan_simple').off("click");
		$('#result_fiche_btn_plan_simple').on("click", function () {
			$('#fiche_cellule_axo').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_krpano_visite').css({ 'visibility': 'hidden', 'z-index': '1' });
			$('#fiche_krpano_aerien').css({ 'visibility': 'hidden', 'z-index': '1' });
			setResultFicheBtnActive(document.getElementById('result_fiche_btn_plan_simple'));
			tri_volet_content_step02_fiche_scrollContent.scrollTo({
				top: asset_viewer.offsetTop,
				behavior: 'smooth'
			});
			fiche_swiper.slideTo(0);
		});
	}
	if (elem.visite360 !== null) {
		$('#result_fiche_btn_visite_360').off("click");
		$('#result_fiche_btn_visite_360').on("click", function () {
			if (!$('#fiche_krpano_visite_iframe').attr('src').includes(elem.visite360))
				$('#fiche_krpano_visite_iframe').attr('src', elem.visite360);
			$('#fiche_cellule_axo').css({'visibility': 'hidden', 'z-index': '1'	});
			$('#fiche_krpano_visite').css({'visibility': 'visible', 'z-index': '3' });
			$('#fiche_krpano_aerien').css({'visibility': 'hidden', 'z-index': '1' });
			setResultFicheBtnActive(document.getElementById('result_fiche_btn_visite_360'));
		});

		$('#fiche_krpano_visite_expand').off("click");
		$('#fiche_krpano_visite_expand').on("click", function() {
			window.open(elem.visite360, '_blank').focus();
		});
	}
	
	// Trigger favoris
	$('#result_fiche_btn_favori').off("click");
	$('#result_fiche_btn_favori').on("click", function () {
		setFavori(elem.nom, !getFavori(elem.nom));
	});
	

}

function setResultFicheBtnActive(current_btn) {
	let btn_list = document.querySelectorAll('#result_fiche_btn_list li');
	[].forEach.call(btn_list, function(btn) {
		if (btn == current_btn) {
			btn.classList.add('active');
		} else {
			if (btn.classList.contains('active')) btn.classList.remove('active');
		}
		
	});
}

var current_cellule_list = [];
var current_aerien_list = [];

function initFicheResultSlideShow(elem) {

	console.log("-- initFicheResultSlideShow");

	// Reset
	$('#fiche_swiper_container').css('display', 'none');
	$('#fiche_swiper_container').css('opacity', '0');
	$('#fiche_swiper_wrapper').html("");
	fiche_swiper.slideTo(0);

	// Plan
	let tmp_str = '';
	if (elem.pdf == null || elem.pdf === "") {
		tmp_str += '<div class="swiper-slide">';
		tmp_str += '<img src="' + pdv_pas_de_plan + '" class="fiche_slide_img_pos" draggable="false" />';
		tmp_str += '<img src="' + pdv_pas_de_plan + '" class="fiche_slide_img" draggable="false" />';
		tmp_str += '</div>';
		$('#fiche_swiper_wrapper').append(tmp_str);
	} else {
		tmp_str += '<div class="swiper-slide" nature="plan_pdf">';
		tmp_str += '<img src="PDV/Vignettes/HD/' + elem.pdf + '.jpg" class="fiche_slide_img_pos" draggable="false" />';
		tmp_str += '<img src="PDV/Vignettes/HD/' + elem.pdf + '.jpg" class="fiche_slide_img" draggable="false" />';
		tmp_str += '<div class="item-visu-overlaycontainer item-visu-overlaycontainer-plan" elem_id="' + elem.id + '" index="' + 0 + '">';
		tmp_str += '<div class="slide_overlay">';
		tmp_str += '<svg class="slide_zoom_button slide_zoom_button_plan" viewBox="0 0 40 40" elem_id="' + elem.id + '" index="' + 0 + '">';
		tmp_str += '<rect width="40" height="40" style="fill: #fff; opacity:0;"/>';
		tmp_str += '<circle cx="20" cy="20" r="16.387" style="fill: #fff; stroke: #6a7076; stroke-miterlimit: 10; stroke-width: 1.5px;"/>';
		tmp_str += '<path style="fill: #6a7076;" d="M28.383,27.069l-4.031-4.031c-.076-.076-.176-.116-.282-.116h-.438c1.046-1.212,1.68-2.789,1.68-4.516,0-3.815-3.091-6.906-6.906-6.906s-6.906,3.091-6.906,6.906,';
		tmp_str += '3.091,6.906,6.906,6.906c1.727,0,3.304-.634,4.516-1.68v.438c0,.106,.043,.206,.116,.282l4.031,4.031c.156,.156,.408,.156,.564,0l.75-.75c.156-.156,.156-.408,0-.564Zm-9.978-3.35c-2.935,';
		tmp_str += '0-5.312-2.377-5.312-5.312s2.377-5.312,5.312-5.312,5.312,2.377,5.312,5.312-2.377,5.312-5.312,5.312Z" />';
		tmp_str += '</svg>';
		tmp_str += '</div>';
		tmp_str += '</div>';
		tmp_str += '</div>';
		$('#fiche_swiper_wrapper').append(tmp_str);

		if (!displayIsMobile) {
			$('.slide_zoom_button_plan').each(function (index, element) {
				$(element).off('click');
				$(element).on('click', function () {
					let id_lot = parseInt($(element).attr('elem_id'));
					let lot_elem = searchLotById(id_lot);
					if (elem.pdf != null && elem.pdf !== "")
						window.open('PDV/' + lot_elem.pdf + '.pdf', 'PlansPDF', 'resizable=yes,scrollbars=yes,status=yes');
				});
			});
		} else {
			$('.item-visu-overlaycontainer-plan').each(function (index, element) {
				$(element).off('click');
				$(element).on('click', function () {
					let id_lot = parseInt($(element).attr('elem_id'));
					let lot_elem = searchLotById(id_lot);
					if (elem.pdf != null && elem.pdf !== "")
						window.open('PDV/' + lot_elem.pdf + '.pdf', 'PlansPDF', 'resizable=yes,scrollbars=yes,status=yes');
				});
			});
		}
	}


	// Cellule
	if ((elem.cellule !== null) && (elem.cellule !== "")) {

		current_cellule_list = elem.cellule.split(' ');
		current_cellule_list.forEach(function (cellule_item, cellule_index) {
			current_cellule_list[cellule_index] = cellule_item.trim();
			let current_cellule_src = "cellules/" + current_cellule_list[cellule_index] + ".jpg";

			tmp_str = '';
			tmp_str += '<div class="swiper-slide" nature="cellule2d">';
			tmp_str += '<img src="' + current_cellule_src + '" class="fiche_slide_img_pos" draggable="false" />';
			tmp_str += '<img src="' + current_cellule_src + '" class="fiche_slide_img" draggable="false" />';
			tmp_str += '<div class="item-visu-overlaycontainer item-visu-overlaycontainer-cellule" elem_id="' + elem.id + '" index="' + cellule_index + '">';
			tmp_str += '<div class="slide_overlay">';
			tmp_str += '<svg class="slide_zoom_button slide_zoom_button_cellule" viewBox="0 0 40 40" elem_id="' + elem.id + '" index="' + cellule_index + '">';
			tmp_str += '<rect width="40" height="40" style="fill: #fff; opacity:0;"/>';
			tmp_str += '<circle cx="20" cy="20" r="16.387" style="fill: #fff; stroke: #6a7076; stroke-miterlimit: 10; stroke-width: 1.5px;"/>';
			tmp_str += '<path style="fill: #6a7076;" d="M28.383,27.069l-4.031-4.031c-.076-.076-.176-.116-.282-.116h-.438c1.046-1.212,1.68-2.789,1.68-4.516,0-3.815-3.091-6.906-6.906-6.906s-6.906,3.091-6.906,6.906,';
			tmp_str += '3.091,6.906,6.906,6.906c1.727,0,3.304-.634,4.516-1.68v.438c0,.106,.043,.206,.116,.282l4.031,4.031c.156,.156,.408,.156,.564,0l.75-.75c.156-.156,.156-.408,0-.564Zm-9.978-3.35c-2.935,';
			tmp_str += '0-5.312-2.377-5.312-5.312s2.377-5.312,5.312-5.312,5.312,2.377,5.312,5.312-2.377,5.312-5.312,5.312Z" />';
			tmp_str += '</svg>';
			tmp_str += '</div>';
			tmp_str += '</div>';
			tmp_str += '</div>';

			$('#fiche_swiper_wrapper').append(tmp_str);

		});

		current_fiche_result_cellule_index = 1;

		if (!displayIsMobile) {
			$('.slide_zoom_button_cellule').each(function (index, element) {
				$(element).off('click');
				$(element).on('click', function () {
					let id_lot = parseInt($(element).attr('elem_id'));
					let current_cellule_index = parseInt($(element).attr('index'));
					console.log("cellule zoom clicked - id: " + id_lot + " - index: " + current_cellule_index);
					openLightboxCellule(searchLotById(id_lot), current_cellule_index);
				});
			});
		} else {
			$('.item-visu-overlaycontainer-cellule').each(function (index, element) {
				$(element).off('click');
				$(element).on('click', function () {
					let id_lot = parseInt($(element).attr('elem_id'));
					let current_cellule_index = parseInt($(element).attr('index'));
					console.log("cellule zoom clicked - id: " + id_lot + " - index: " + current_cellule_index);
					openLightboxCellule(searchLotById(id_lot), current_cellule_index);
				});
			});
		}
	}


	// Aerien
	if ((elem.aerien !== null) && (elem.aerien !== "")) {

		current_aerien_list = elem.aerien.split(' ');
		current_aerien_list.forEach(function (aerien_item, aerien_index) {
			current_aerien_list[aerien_index] = aerien_item.trim();
			let current_aerien_src = "panos_aerien/" + current_aerien_list[aerien_index] + ".jpg";

			tmp_str = '';
			tmp_str += '<div class="swiper-slide" nature="aerien">';
			tmp_str += '<img src="' + current_aerien_src + '" class="fiche_slide_img_pos" draggable="false" />';
			tmp_str += '<img src="' + current_aerien_src + '" class="fiche_slide_img" draggable="false" />';
			tmp_str += '<div class="item-visu-overlaycontainer item-visu-overlaycontainer-aerien">';
			tmp_str += '<div class="slide_overlay">';
			tmp_str += '<svg class="slide_zoom_button slide_zoom_button_aerien" viewBox="0 0 40 40" elem_id="' + elem.id + '" index="' + aerien_index + '">';
			tmp_str += '<rect width="40" height="40" style="fill: #fff; opacity:0;"/>';
			tmp_str += '<circle cx="20" cy="20" r="16.387" style="fill: #fff; stroke: #6a7076; stroke-miterlimit: 10; stroke-width: 1.5px;"/>';
			tmp_str += '<path style="fill: #6a7076;" d="M28.383,27.069l-4.031-4.031c-.076-.076-.176-.116-.282-.116h-.438c1.046-1.212,1.68-2.789,1.68-4.516,0-3.815-3.091-6.906-6.906-6.906s-6.906,3.091-6.906,6.906,';
			tmp_str += '3.091,6.906,6.906,6.906c1.727,0,3.304-.634,4.516-1.68v.438c0,.106,.043,.206,.116,.282l4.031,4.031c.156,.156,.408,.156,.564,0l.75-.75c.156-.156,.156-.408,0-.564Zm-9.978-3.35c-2.935,';
			tmp_str += '0-5.312-2.377-5.312-5.312s2.377-5.312,5.312-5.312,5.312,2.377,5.312,5.312-2.377,5.312-5.312,5.312Z" />';
			tmp_str += '</svg>';
			tmp_str += '</div>';
			tmp_str += '</div>';
			tmp_str += '</div>';

			$('#fiche_swiper_wrapper').append(tmp_str);

		});

		if ((elem.cellule == null) || (elem.cellule == "")) {
			current_fiche_result_aerien_index = 1;
		} else {
			current_fiche_result_aerien_index = 1 + current_cellule_list.length;
		}

		if (!displayIsMobile) {
			$('.slide_zoom_button_aerien').each(function (index, element) {
				$(element).off('click');
				$(element).on('click', function () {
					let id_lot = parseInt($(element).attr('elem_id'));
					let current_aerien_index = parseInt($(element).attr('index'));
					console.log("aerien zoom clicked - id: " + id_lot + " - index: " + current_aerien_index);
					openLightboxAerien(searchLotById(id_lot), current_aerien_index);
				});
			});
		} else {
			$('.item-visu-overlaycontainer-aerien').each(function (index, element) {
				$(element).off('click');
				$(element).on('click', function () {
					let id_lot = parseInt($(element).attr('elem_id'));
					let current_aerien_index = parseInt($(element).attr('index'));
					console.log("aerien zoom clicked - id: " + id_lot + " - index: " + current_aerien_index);
					openLightboxAerien(searchLotById(id_lot), current_aerien_index);
				});
			});
		}
	}

	fiche_swiper.update();

}

function searchResultByName(liste_resultats, nom) {
	tmp_result = null;
	liste_resultats.forEach(function (elem) {
		if (elem.nom == nom) tmp_result = elem;
	});
	return tmp_result;
}

function getEtageDisplayName(etage_name) {
	return etages_display_noms[etages_noms.indexOf(etage_name)];
}

function tri_close_volet() {
	if ($('#tri_menu_gauche').hasClass('open')) $('#tri_menu_gauche').removeClass('open');
}

/***********************************************************************************************************/
/*                                           Favoris                                                       */
/***********************************************************************************************************/

function initFavoris() {

	// OUVERTURE FERMETURE VOLET FAVORIS
	$('#fav_button_open_volet').on('click', function () {
		displayFavoris();
		closeVideoAndGalerie();
		$('#MODAL-favoris').addClass('open');
	});
	$('.close-fav').on('click', function () {
		$('#MODAL-favoris').removeClass('open');
	});
	// SLIDESHOW FAVORIS
	if (!displayIsMobile) {
		$('#MODAL_favoris_content_items').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $("#MODAL-favoris"),
		});
	} else {
		$('#MODAL_favoris_content_items').slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			appendArrows: $("#MODAL-favoris"),
		});
	}

}

function displayFavoris() {

	let current_slide_count = $('#MODAL_favoris_content_items .slick-slide').length;
	for (let i = (current_slide_count - 1); i >= 0; i--) {
		$('#MODAL_favoris_content_items').slick('slickRemove', i);
	}

	tri_lots_favoris = getFavorisList();
	// console.log(tri_lots_favoris);

	let nombre_favoris = tri_lots_favoris.length;
	if (nombre_favoris > 1) {
		$('#fav_total_logements').html(nombre_favoris + " logements");
	} else {
		$('#fav_total_logements').html(nombre_favoris + " logement");
	}

	tri_lots_favoris.forEach(function (elem) {
		let str = '';
		str += '<div class="MODAL-favoris_content_item type-' + elem.type + '" id="MODAL_favoris_content_item_' + elem.nom + '">';
		str += '<p class="title">' + elem.type + ' : <strong>' + elem.nom + '</strong>';
		if (elem.prix !== null) str += ' - ' + elem.prix + ' &euro;';
		str += '</p>';
		str += '<div class="item-visu">';
		if (elem.pdf == null || elem.pdf === "") {
			str += '<img src="' + pdv_pas_de_plan + '">';
		} else {
			str += '<img src="PDV/Vignettes/HD/' + elem.nom + '.jpg">';
		}
		// str += '<img src="PDV/Vignettes/HD/'+elem.nom+'.jpg" width="100%">';
		str += '</div>';
		str += '<p class="fav-type">';
		str += 'Appartement ';
		switch (elem.type) {
			case 'T1': str += "1 pièce"; break;
			case 'T1D': str += "1 pièce"; break;
			case 'T1B': str += "1 pièce"; break;
			case 'T2': str += "2 pièces"; break;
			case 'T2D': str += "2 pièce"; break;
			case 'T2B': str += "2 pièce"; break;
			case 'T3': str += "3 pièces"; break;
			case 'T3D': str += "3 pièces"; break;
			case 'T3B': str += "3 pièce"; break;
			case 'T4': str += "4 pièces"; break;
			case 'T4D': str += "4 pièces"; break;
			case 'T4B': str += "4 pièce"; break;
			case 'T5': str += "5 pièces"; break;
			case 'T5D': str += "5 pièces"; break;
			case 'T5B': str += "5 pièce"; break;
			case 'T6': str += "6 pièces"; break;
			case 'T6D': str += "6 pièces"; break;
			case 'T6B': str += "6 pièce"; break;
			case 'T7': str += "7 pièces"; break;
			case 'T7D': str += "7 pièces"; break;
			case 'T7B': str += "7 pièces"; break;
			case 'T8': str += "8 pièces"; break;
			case 'T8D': str += "8 pièces"; break;
			case 'T8B': str += "7 pièces"; break;
			case 'T9': str += "9 pièces"; break;
			case 'T9D': str += "9 pièces"; break;
			case 'T9B': str += "7 pièces"; break;
		}
		// TODO
		let is_Bat_defined = true;
		if (is_Bat_defined) {
			str += "<br>";
			str += "Bâtiment " + elem.nom.substring(0, 1);
		}
		str += '</p>';
		str += '<p class="fav-detail">';
		str += '<strong>Surface :</strong> ' + elem.surface + '<br>';
		if ((elem.surface_annexe !== null) && (elem.surface_annexe !== "xx.xx"))
			str += '<strong>Surface annexe :</strong> ' + elem.surface_annexe + '<br>';
		str += '<strong>Étage :</strong> ' + getEtageDisplayName(elem.niveau) + '<br>';
		if (elem.orientation !== null)
			str += '<strong>Orientation :</strong> ' + elem.orientation + '<br>';
		if (elem.nbre_chambres !== null) {
			str += "<strong>Chambres :</strong> " + elem.nbre_chambres + "<br>";
		} else {
			switch (elem.type) {
				case 'T2': str += "<strong>Chambres :</strong> 1<br>"; break;
				case 'T2D': str += "<strong>Chambres :</strong> 1<br>"; break;
				case 'T2B': str += "<strong>Chambres :</strong> 1<br>"; break;
				case 'T3': str += "<strong>Chambres :</strong> 2<br>"; break;
				case 'T3D': str += "<strong>Chambres :</strong> 2<br>"; break;
				case 'T3B': str += "<strong>Chambres :</strong> 2<br>"; break;
				case 'T4': str += "<strong>Chambres :</strong> 3<br>"; break;
				case 'T4D': str += "<strong>Chambres :</strong> 3<br>"; break;
				case 'T4B': str += "<strong>Chambres :</strong> 3<br>"; break;
				case 'T5': str += "<strong>Chambres :</strong> 4<br>"; break;
				case 'T5D': str += "<strong>Chambres :</strong> 4<br>"; break;
				case 'T5B': str += "<strong>Chambres :</strong> 4<br>"; break;
				case 'T6': str += "<strong>Chambres :</strong> 5<br>"; break;
				case 'T6D': str += "<strong>Chambres :</strong> 5<br>"; break;
				case 'T6B': str += "<strong>Chambres :</strong> 5<br>"; break;
				case 'T7': str += "<strong>Chambres :</strong> 6<br>"; break;
				case 'T7D': str += "<strong>Chambres :</strong> 6<br>"; break;
				case 'T7B': str += "<strong>Chambres :</strong> 6<br>"; break;
				case 'T8': str += "<strong>Chambres :</strong> 7<br>"; break;
				case 'T8D': str += "<strong>Chambres :</strong> 7<br>"; break;
				case 'T8B': str += "<strong>Chambres :</strong> 7<br>"; break;
				case 'T9': str += "<strong>Chambres :</strong> 8<br>"; break;
				case 'T9D': str += "<strong>Chambres :</strong> 8<br>"; break;
				case 'T9B': str += "<strong>Chambres :</strong> 8<br>"; break;
			}
		}
		if (elem.nbre_sdb !== null)
			str += "<strong>Salles de bain/d\'eau :</strong> " + elem.nbre_sdb;
		str += '</p>';
		str += '<a href="#" class="remove-fav" id="remove_fav_' + elem.nom + '">';
		str += '<svg viewBox="0 0 496 512" width="26" height="26">';
		str += '<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm123.5 272.3L260.9 394.5c-7.1 7.4-18.7 7.4-25.9 0L124.5 280.3c-32.1-33.2-30.2-88.2 5.7-118.8 31.3-26.7 77.9-21.9 106.6 7.7l11.3 11.6 11.3-11.6c28.7-29.6 75.3-34.4 106.6-7.7 35.8 30.6 37.7 85.6 5.5 118.8z"/>';
		str += '</svg>';
		str += 'Retirer des coups de coeurs';
		str += '</a>';
		str += '<a href="#" class="fav-view-fiche" id="fav_view_fiche_' + elem.nom + '">Fiche détaillée</a>';

		$('#MODAL_favoris_content_items').slick('slickAdd', str);
	});

	$('.remove-fav').each(function (index) {
		$(this).off('click');
		$(this).on('click', function (e) {
			let nom_lot = $(this).attr('id').substring(11);
			let fav_container = document.getElementById('MODAL_favoris_content_item_' + nom_lot);
			let fav_index = Array.prototype.indexOf.call(fav_container.parentNode.children, fav_container);
			// console.log("Remove fav : " + nom_lot + ", index : " + fav_index);
			$('#MODAL_favoris_content_items').slick('slickRemove', fav_index);
			setFavori(nom_lot, false);
			let nombre_favoris = tri_lots_favoris.length;
			if (nombre_favoris > 1) {
				$('#fav_total_logements').html(nombre_favoris + " logements");
			} else {
				$('#fav_total_logements').html(nombre_favoris + " logement");
			}
			if (nombre_favoris == 0) {
				$('#MODAL-favoris').removeClass('open');
			}
		});
	});


	$('.fav-view-fiche').each(function (index) {
		$(this).off('click');
		$(this).on('click', function (e) {
			let nom_lot = $(this).attr('id').substring(15);
			$('#MODAL-favoris').removeClass('open');
			initFicheRecap(nom_lot);
			$('.back-results').hide();
			$('#tri_menu_gauche').addClass('open');
			// Restaure volet de recherche (en cas de seconde ouverture)
			$('#tri_menu_gauche').removeClass('step01').addClass('step02');

		});
	});

	$('#fav_back_search').off('click');
	$('#fav_back_search').on('click', function () {
		$('#MODAL-favoris').removeClass('open');
		$('#tri_menu_gauche').addClass('open');
		$('#tri_menu_gauche').removeClass('step02').addClass('step01');
		$('.view-tabs').show();
		$('.label-fiche').hide();
	});

	$('#zip_download').off('click');
	$('#zip_download').on('click', function (e) {

		let count_images_not_null = 0;
		document.getElementById('loader_text').textContent = "Création Zip";
		showLoader();
		tri_lots_favoris = getFavorisList()
		tri_favoris_zip = new JSZip();

		tri_lots_favoris.forEach(function (el) {
			if (!(el.pdf == null || el.pdf === "")) {
				tri_favoris_zip.file(el.pdf + '.pdf', urlToPromise('PDV/' + el.pdf + '.pdf'), { binary: true });
				count_images_not_null++;
			}
		});

		if ((tri_lots_favoris.length > 0) && (count_images_not_null > 0)) {
			tri_favoris_zip.generateAsync({ type: "blob" }).then(function (blob) {
				eraseLoader();
				saveAs(blob, "plans.zip");
				console.log("Zip des plans done !");
			}, function (err) {
				console.log(err);
			});
		} else {
			eraseLoader();
		}
	});

}

function setFavori(nom_lot, isFavori) {

	// On attribue le flag favori au/aux entrées correpondantes au nom_lot du tableau lots
	let lot_entries = searchLotIndexByNom(nom_lot);
	lot_entries.forEach(function (lot_entry) {
		if (isFavori) {
			lots[lot_entry].favori = 1;
		} else {
			lots[lot_entry].favori = 0;
		}
	});
	// Si la liste des favoris actuels est vide on masque le bouton d'ouverture du récap des favoris
	if (getFavorisList().length > 0) {
		$('#fav_button_open_volet').css('display', 'flex');
	} else {
		$('#fav_button_open_volet').css('display', 'none');
	}

	// Mise a jour de l'état des icones favoris de la fiche produit détaillée et du panel si ceux ci correspondent bien au lot que l'on vient de tag en favori
	let currentPanelName = panel_lib.panel_numlot_prix.panel_numlot_txt.text;
	if (currentPanelName == nom_lot) {
		if (isFavori) {
			panel_lib.panel_bt_coeur.gotoAndStop(1);
		} else {
			panel_lib.panel_bt_coeur.gotoAndStop(0);
		}
	}
	if (isEtiquetteHTML) {
		let etiquette_btn_favori = document.getElementById('etiquette-btn-favori');
		if (isFavori) {
			etiquette_btn_favori.classList.add('actif');
		} else {
			etiquette_btn_favori.classList.remove('actif');
		}
	}
	if ($('#fiche_titre_lot').html() == nom_lot) {
		if (isFavori) {
			// $('#result_fiche_btn_favori_picto circle').css('fill', '#000000');
			// $('#result_fiche_btn_favori_picto path').css('fill', '#FFFFFF');
			$('#result_fiche_btn_favori_picto circle').css('fill', '#ffffff');
			$('#result_fiche_btn_favori_picto path').css('fill', '#d36464');
			$('#result_fiche_btn_favori span.label').html("Retirer de mes coups de coeur");
		} else {
			$('#result_fiche_btn_favori_picto circle').css('fill', '#FFFFFF');
			$('#result_fiche_btn_favori_picto path').css('fill', '#000000');
			$('#result_fiche_btn_favori span.label').html("Ajouter à mes coups de coeur");
		}
	}

}

function getFavori(nom) {
	let lot_entries = searchLotIndexByNom(nom);
	let result = false;
	if (lot_entries.length > 0) {
		if (lots[lot_entries[0]].favori == 1) result = true;
	}
	return result;
}

function getFavorisList() {
	// Pas de doublons
	let tri_lots_clean_tmp = [...lots.reduce((map, obj) => map.has(obj.nom) ? map : map.set(obj.nom, obj), new Map()).values()];
	tri_lots_favoris = [...tri_lots_clean_tmp.reduce((map, obj) => (obj.favori == 0) ? map : map.set(obj.nom, obj), new Map()).values()];
	// console.log(tri_lots_favoris);
	return (tri_lots_favoris);
}




/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */
/* ********************************************************************************************************* */




/* ********************************************************************************************************* */
/*                                        Fonctions additionnelles                                           */
/* ********************************************************************************************************* */
function newRect(x, y, width, height) {
	return new Object({ x: x, y: y, width: width, height: height });
}

function newVector2D(x, y) {
	return new Object({ x: x, y: y });
}

function simulateKeyEvent() {

	var keyEvent = new KeyboardEvent("keypress", { key: "Shift", keyCode: '16', shiftKey: true });
	document.dispatchEvent(keyEvent);

}

var onImgLoad2 = function (selector, callback) {
	$(selector).each(function () {
		if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
			callback.apply(this);
		}
		else {
			$(this).on('load', function () {
				callback.apply(this);
			});
		}
	});
};

function contains(str, expr) {
	var contain;
	var re = new RegExp(expr, "g");
	var res = str.match(re);

	//var res = str.includes(expr);
	if (res == null) {
		contain = false;
	} else {
		contain = true;
	}

	return contain;
}

function pad(num, size) {
	var s = Math.abs(num) + "";
	while (s.length < size) s = "0" + s;
	return s;
}

function calculateDistance(vector1, vector2) {

	//radians
	var lat1 = (vector1.x * 2.0 * Math.PI) / 60.0 / 360.0;
	var long1 = (vector1.y * 2.0 * Math.PI) / 60.0 / 360.0;
	var lat2 = (vector2.x * 2.0 * Math.PI) / 60.0 / 360.0;
	var long2 = (vector2.y * 2.0 * Math.PI) / 60.0 / 360.0;


	// use to different earth axis length    
	var a = 6378137.0;        // Earth Major Axis (WGS84)    
	var b = 6356752.3142;     // Minor Axis    
	var f = (a - b) / a;        // "Flattening"    
	var e = 2.0 * f - f * f;      // "Eccentricity"      

	var beta = (a / Math.sqrt(1.0 - e * Math.sin(lat1) * Math.sin(lat1)));
	var cos = Math.cos(lat1);
	var x = beta * cos * Math.cos(long1);
	var y = beta * cos * Math.sin(long1);
	var z = beta * (1 - e) * Math.sin(lat1);

	beta = (a / Math.sqrt(1.0 - e * Math.sin(lat2) * Math.sin(lat2)));
	cos = Math.cos(lat2);
	x -= (beta * cos * Math.cos(long2));
	y -= (beta * cos * Math.sin(long2));
	z -= (beta * (1 - e) * Math.sin(lat2));

	return (Math.sqrt((x * x) + (y * y) + (z * z)) / 1000);
}

function isIniFrame() {
	return (window.location !== window.parent.location);
}
function isMobile() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}
function isIOS() {
	return (/iPhone|iPad|iPod/i.test(navigator.userAgent));
}

// Loading image
function preloadImg(uri) {
	return new Promise((resolve, reject) => {
		image = new Image();
		image.src = uri;
		image.onload = function () {
			resolve();
		}
		image.onerror = function (err) {
			reject(err);
		}
	});
}

// Zip function
function urlToPromise(url) {
	return new Promise(function (resolve, reject) {
		JSZipUtils.getBinaryContent(url, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

function formatNumber(number, digits) {
	number += '';
	if (number.length > digits) {
		return number;
	} else {
		let return_prefix = '';
		for (let i = 1; i <= (digits - number.length); i++) {
			return_prefix += '0';
		}
		return return_prefix += number;
	}
}

function my_sleep(miliseconds) {
	var currentTime = new Date().getTime();

	while (currentTime + miliseconds >= new Date().getTime()) {
	}
	console.log("sleep done");
}

function theTouchisEnabled() {
	let deviceAgent = navigator.userAgent.toLowerCase();
	return (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0) ||
		(window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0) ||
		(deviceAgent.match(/(iphone|ipod|ipad)/) ||
			deviceAgent.match(/(android)/) ||
			deviceAgent.match(/(iemobile)/) ||
			deviceAgent.match(/iphone/i) ||
			deviceAgent.match(/ipad/i) ||
			deviceAgent.match(/ipod/i) ||
			deviceAgent.match(/blackberry/i) ||
			deviceAgent.match(/mobile/i) ||
			deviceAgent.match(/bada/i));
}

function elliptical_arc(angle) {

	const cos = Math.cos;
	const sin = Math.sin;
	const PI = Math.PI;

	let cx = 78;
	let cy = 78;
	let rx = 70;
	let ry = 70;
	let t1 = 225 / 180 * PI;
	let current_angle = angle / 180 * PI;
	let rotation = 0;

	const f_matrix_times = (([[a, b], [c, d]], [x, y]) => [a * x + b * y, c * x + d * y]);
	const f_rotate_matrix = ((x) => {
		const cosx = cos(x);
		const sinx = sin(x);
		return [[cosx, -sinx], [sinx, cosx]];
	});
	const f_vec_add = (([a1, a2], [b1, b2]) => [a1 + b1, a2 + b2]);
	const f_svg_ellipse_arc = (([cx, cy], [rx, ry], [t1, current_angle], rotation) => {
		/* [
		returns a a array that represent a ellipse for SVG path element d attribute.
		cx,cy center of ellipse.
		rx,ry major minor radius.
		t1 start angle, in radian.
		current_angle angle to sweep, in radian. positive.
		rotation rotation on the whole, in radian.
		url: SVG Circle Arc http://xahlee.info/js/svg_circle_arc.html
		Version 2019-06-19
		] */
		current_angle = current_angle % (2 * PI);
		const rotMatrix = f_rotate_matrix(rotation);
		const [sX, sY] = (f_vec_add(f_matrix_times(rotMatrix, [rx * cos(t1), ry * sin(t1)]), [cx, cy]));
		const [eX, eY] = (f_vec_add(f_matrix_times(rotMatrix, [rx * cos(t1 + current_angle), ry * sin(t1 + current_angle)]), [cx, cy]));
		const fA = ((current_angle > PI) ? 1 : 0);
		const fS = ((current_angle > 0) ? 1 : 0);
		return [" M ", sX, " ", sY, " A ", rx, ry, rotation / PI * 180, fA, fS, eX, eY].join(" ");
	});

	return f_svg_ellipse_arc([cx, cy], [rx, ry], [t1, current_angle], rotation);
}

function capitalize(str) {
	str = str.toLowerCase();
	str = str[0].toUpperCase() + str.substring(1);
	return str;
}

function normalizeString(str) {
	str = str.trim();
	str = str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	str = str.replace(' ', '');
	str = str.replace('	', '');
	let digits_str = str.match(/\d+/);
	str = str.replace(digits_str, formatNumber(parseInt(digits_str), 3));
	str = str.toUpperCase();
	return str;
}

function cleanString(str) {
	str = str.trim();
	str = str.replace(' ', '');
	str = str.toLowerCase();
	return str;
}

function getElemById(id) {
	let foundedLot = null;
	lots.forEach((lot) => {
		if (parseInt(lot.id) == id) foundedLot = lot;
	});
	return foundedLot;
}


/********************/
/*    Fullscreen    */
/********************/
function isFullScreen() {

	let isFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||
		document.webkitFullscreenElement ||
		document.mozFullScreenElement ||
		document.msFullscreenElement;
	return isFullScreen;
}

function fullscreenMode() {

	theFrameInFullscreen = !theFrameInFullscreen
	var elem = document.body;
	var isInFullScreen = isFullScreen();
	if (isInFullScreen) {
		let requestMethod = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullscreen;
		if (requestMethod) {
			requestMethod.call(document);
		}
		else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
			let wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	} else {
		let requestMethod = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen || elem.msRequestFullScreen;
		if (requestMethod) {
			requestMethod.call(elem);
		} else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
			let wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}
}

function detectIE() {

	let ua = window.navigator.userAgent;

	// Test values; Uncomment to check result …

	// IE 10
	// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

	// IE 11
	// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

	// Edge 12 (Spartan)
	// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

	// Edge 13
	// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

	let msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	let trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	let edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;

}







