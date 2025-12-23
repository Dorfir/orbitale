(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var ss = {}; var img = {};
	lib.ssMetadata = [];


	(lib.AnMovieClip = function () {
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
		}
		this.play = function () {
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
		}
		this.stop = function () {
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	// helper functions:ur

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}

	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}


	(lib.type_couleur = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#EAEAEB").ss(0.5, 0, 0, 4).p("Ai2i2IFtAAIAAFtIltAAg");
		this.shape.setTransform(0, 0, 1, 1);

		this.panel_typo_couleur = new cjs.Shape();
		this.panel_typo_couleur.graphics.f("#8DC9EC").s().p("Ai1C3IAAltIFrAAIAAFtg");
		this.panel_typo_couleur.setTransform(0, 0, 1, 1);
		this.panel_typo_couleur.name = "panel_typo_couleur";
		this.panel_typo_couleur.parent = this;

		this.panel_typo_txt = new cjs.Text("T5", "18px 'Montserrat'", "#FFFFFF");
		this.panel_typo_txt.name = "panel_typo_txt";
		this.panel_typo_txt.textAlign = "center";
		this.panel_typo_txt.lineHeight = 22;
		this.panel_typo_txt.lineWidth = 40;
		this.panel_typo_txt.parent = this;
		this.panel_typo_txt.setTransform(0, -7);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_typo_couleur }, { t: this.shape }, { t: this.panel_typo_txt }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-19.5, -19.5, 39, 39);


	(lib.panel_superficie = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_3
		this.panel_superficie_txt = new cjs.Text("xx M²", "15px 'Montserrat'", "#47474C");
		this.panel_superficie_txt.name = "panel_superficie_txt";
		this.panel_superficie_txt.lineHeight = 21;
		this.panel_superficie_txt.lineWidth = 106;
		this.panel_superficie_txt.parent = this;
		this.panel_superficie_txt.setTransform(88, -6);

		this.timeline.addTween(cjs.Tween.get(this.panel_superficie_txt).wait(1));

		// Calque_2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#47474C").s().p("AgGAdQgCgCgBgFQABgEACgDQACgDAEAAQAEAAADADQACADAAAEQAAAFgCACQgDADgEAAQgEAAgCgDgAgGgOQgCgDgBgEQABgFACgDQACgCAEAAQAEAAADACQACADAAAFQAAAEgCADQgDACgEABQgEgBgCgCg");
		this.shape.setTransform(82.4, 3.025);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#47474C").s().p("AgTAkQgJgGgFgJQgFgIAAgNQAAgLAFgJQAFgJAJgFQAJgGALAAQAOABAJAFQAJAGADALQAEAKgBAOIg8AAQADAJAGAFQAHAGAIAAQAHAAAGgCQAFgDAFgEIAJAJQgGAHgIADQgJAEgKgBQgMAAgJgEgAAYgFQgBgKgGgFQgGgFgJAAQgJAAgGAFQgGAFgCAKIAtAAIAAAAg");
		this.shape_1.setTransform(72.5361, 2.1);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#47474C").s().p("AgIA5IAAhPIARAAIAABPgAgHgmQgCgDAAgEQAAgFACgCQADgEAEAAQAEAAADAEQADACAAAFQAAAEgDADQgDADgEABQgEgBgDgDg");
		this.shape_2.setTransform(66, 0.45);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#47474C").s().p("AgRAkQgJgGgFgJQgFgIAAgNQAAgLAFgJQAFgJAJgFQAJgGALAAQALAAAIAEQAJADAFAHIgJALQgEgFgGgCQgGgCgHgBQgGABgFADQgGADgDAGQgDAFAAAHQAAAIADAFQADAHAGACQAFAEAGAAQAIAAAFgDQAGgCAEgFIAKAKQgFAHgJAEQgIADgMAAQgLAAgJgEg");
		this.shape_3.setTransform(59.625, 2.1);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#47474C").s().p("AgIA5IAAhPIARAAIAABPgAgGgmQgDgDAAgEQAAgFADgCQADgEADAAQAEAAADAEQADACAAAFQAAAEgDADQgDADgEABQgDgBgDgDg");
		this.shape_4.setTransform(53.3, 0.45);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#47474C").s().p("AgQA4IAAg/IgLAAIAAgNIALAAIAAgHQAAgKADgGQAFgGAFgDQAGgDAHAAQAFAAAEABQAFABAEADIgHAOIgFgDIgGgBQgEAAgDADQgDACAAAGIAAAJIAUAAIAAANIgUAAIAAA/g");
		this.shape_5.setTransform(49.35, 0.5);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#47474C").s().p("AgWAoIAAhPIASAAIAAAQQAEgIAGgEQAHgEAJAAIAAAQQgIAAgFADQgGACgDAFQgDAGgBAHIAAAog");
		this.shape_6.setTransform(43.6, 2.075);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#47474C").s().p("AgTAkQgJgGgFgJQgFgIAAgNQAAgLAFgJQAFgJAJgFQAJgGALAAQAOABAJAFQAJAGADALQAEAKgBAOIg8AAQADAJAGAFQAHAGAIAAQAHAAAGgCQAFgDAFgEIAJAJQgGAHgIADQgJAEgKgBQgMAAgJgEgAAYgFQgBgKgGgFQgGgFgJAAQgJAAgGAFQgGAFgCAKIAtAAIAAAAg");
		this.shape_7.setTransform(35.7361, 2.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#47474C").s().p("AgpA3IAAhsIASAAIAAAOQAEgHAHgEQAHgEAIAAQAMAAAIAGQAJAFAFAJQAEAJABAMQgBAMgEAIQgFAJgIAFQgJAFgLAAQgJAAgHgDQgHgEgEgHIAAArgAgMgkQgFADgDAGQgDAGAAAIQAAALAGAGQAHAHAKABQAHAAAFgEQAGgDADgFQADgGAAgHQAAgIgDgGQgDgGgGgDQgFgDgHAAQgGAAgGADg");
		this.shape_8.setTransform(26.625, 3.525);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#47474C").s().p("AgdAgQgHgIgBgOIAAgxIASAAIAAAsQAAAJAFAFQAFAFAIAAQAGAAAFgDQAFgEADgFQACgGAAgGIAAgnIASAAIAABPIgSAAIAAgQQgEAIgHAEQgHAEgJAAQgOAAgIgIg");
		this.shape_9.setTransform(16.125, 2.125);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#47474C").s().p("AgVAxQgLgFgIgHIAHgQQAJAIAJAEQAJAEAIAAQAJAAAFgEQAFgDABgGQgBgGgEgDQgEgDgGgDIgNgEIgNgFQgHgCgEgGQgEgGAAgJQAAgJAFgGQAEgHAJgDQAJgEAKAAQAKAAAKADQAJADAIAFIgIAPQgIgFgIgCQgIgCgGAAQgHAAgFACQgEADAAAGQAAAFAEAEQAEADAGACIANAEQAHACAHAEQAGACAEAGQAEAGAAAJQAAAJgFAHQgFAHgJAEQgJADgLAAQgMAAgLgEg");
		this.shape_10.setTransform(6.525, 0.825);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, -11, 196, 22);


	(lib.puce_ombre = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgtAdQgTgMAAgRQAAgPATgMQATgMAaAAQAbAAATAMQATAMAAAPQAAARgTAMQgTALgbAAQgaAAgTgLg");

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-6.5, -4, 13, 8);


	(lib.puce_corps = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s("#B6B9BE").p("AhDBgQgcgNgYgYQgxgyAAhFQAAhGAxgyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABFgxAyQgYAYgcAMIhECHgAgjgDQgCADgBACIAAARQABADACACQACADAEAAIA7AAQAIAAAAgIIAAgRQAAgCgDgDQgBgCgEAAIgIAAIAAhEQgBgEgCgCQgCgDgDAAIgrAAQgEAAgCADQgCACgBAEIAAAQQABADACADQACACAEAAIAIAAIAAAsIgIAAQgEAAgCACgAgUiSQgIAJAAAMQAAALAIAJQAJAIALAAQAMAAAIgIQAJgJAAgLQAAgMgJgJQgIgIgMAAQgLAAgJAIg");
		this.shape.setTransform(0, -23.025);

		this.shape1 = new cjs.Shape();
		this.shape1.graphics.f("#B6B9BE").s().drawCircle(0, 0, 16);
		this.shape1.setTransform(0, -30);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.shape1).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-16.9, -46, 33.9, 46);

	(lib.panel_numlot_prix = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.panel_prix_txt = new cjs.Text("PRIX", "18px 'Montserrat'", "#47474C");
		this.panel_prix_txt.name = "panel_prix_txt";
		this.panel_prix_txt.lineHeight = 29;
		this.panel_prix_txt.lineWidth = 149;
		this.panel_prix_txt.parent = this;
		this.panel_prix_txt.setTransform(-68, -1.05);

		this.panel_numlot_txt = new cjs.Text("NUM_LOT", "bold 20px 'Montserrat'", "#47474C");
		this.panel_numlot_txt.name = "panel_numlot_txt";
		this.panel_numlot_txt.lineHeight = 28;
		this.panel_numlot_txt.lineWidth = 149;
		this.panel_numlot_txt.parent = this;
		this.panel_numlot_txt.setTransform(-68, -23.75);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_numlot_txt }, { t: this.panel_prix_txt }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-70, -25.7, 153, 51.5);


	(lib.panel_fleche = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AjqhyIHVAAIjrDlg");
		this.shape.setTransform(0, -11.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-23.5, -23, 47, 23);


	(lib.panel_bt_coeur_ico = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#B6B9BE").s().p("AgIBQIhIhLQgPgPABgXQABgXASgPQAPgNATACQAVACANAOIAHAIIAHgIQAPgOATgCQAUgCAQANQARAPABAXQABAXgQAPIhIBLQgDADgFAAQgEAAgEgDg");
		this.shape.setTransform(-0.0001, 0.0367);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-9.5, -8.3, 19, 16.700000000000003);


	(lib.panel_bt_coeur_ico_color = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		// this.shape.graphics.f("#6C717B").s().p("AgIBQIhIhLQgPgPABgXQABgXASgPQAPgNATACQAVACANAOIAHAIIAHgIQAPgOATgCQAUgCAQANQARAPABAXQABAXgQAPIhIBLQgDADgFAAQgEAAgEgDg");
		this.shape.graphics.f("#d36464").s().p("AgIBQIhIhLQgPgPABgXQABgXASgPQAPgNATACQAVACANAOIAHAIIAHgIQAPgOATgCQAUgCAQANQARAPABAXQABAXgQAPIhIBLQgDADgFAAQgEAAgEgDg");
		this.shape.setTransform(-0.0001, 0.0367);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-9.5, -8.3, 19, 16.700000000000003);


	(lib.panel_background = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("EgokARJQglAAgZgaQgagZABglIAA/iQgBgkAagZQAZgaAlAAMBRKAAAQAjAAAaAaQAZAZAAAkIAAfiQAAAlgZAZQgaAagjAAg");
		this.shape.setTransform(0, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-268.4, -109.6, 536.9, 219.3);


	(lib.panel_orientation = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_3
		this.panel_orientation_txt = new cjs.Text("PTS_CARD", "15px 'Montserrat'", "#47474C");
		this.panel_orientation_txt.name = "panel_orientation_txt";
		this.panel_orientation_txt.lineHeight = 21;
		this.panel_orientation_txt.lineWidth = 95;
		this.panel_orientation_txt.parent = this;
		this.panel_orientation_txt.setTransform(99, -6);

		this.timeline.addTween(cjs.Tween.get(this.panel_orientation_txt).wait(1));

		// Calque_2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#47474C").s().p("AgGAdQgDgCAAgFQAAgEADgDQACgDAEAAQAEAAACADQADADABAEQgBAFgDACQgCADgEAAQgEAAgCgDgAgGgOQgDgDAAgEQAAgFADgDQACgCAEAAQAEAAACACQADADABAFQgBAEgDADQgCACgEABQgEgBgCgCg");
		this.shape.setTransform(93.15, 3.025);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#47474C").s().p("AAVAoIAAgsQAAgJgFgFQgFgFgJAAQgJAAgGAGQgGAGgBAKIAAApIgRAAIAAhPIARAAIAAAQQAFgJAHgDQAHgEAKAAQAOAAAHAIQAIAIAAAPIAAAwg");
		this.shape_1.setTransform(82.775, 2.075);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#47474C").s().p("AgVAkQgJgGgFgJQgFgJgBgMQABgLAFgJQAFgJAJgFQAKgFALgBQANABAJAFQAJAFAFAJQAGAJAAALQAAAMgGAJQgFAJgJAGQgJAEgNAAQgLAAgKgEgAgQgRQgHAGAAALQAAAMAHAHQAGAHAKAAQALAAAHgHQAGgHABgMQgBgLgGgGQgHgIgLAAQgKAAgGAIg");
		this.shape_2.setTransform(72.975, 2.1);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#47474C").s().p("AgIA5IAAhPIAQAAIAABPgAgHgmQgCgDAAgEQAAgFACgCQADgEAEAAQAEAAADAEQADACAAAFQAAAEgDADQgDADgEABQgEgBgDgDg");
		this.shape_3.setTransform(66.2, 0.45);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#47474C").s().p("AgDAvQgFgCgDgFQgDgGAAgHIAAgpIgMAAIAAgNIAMAAIAAgWIAQAAIAAAWIAXAAIAAANIgXAAIAAAlQAAAHACACQACACAEAAIAGAAIAGgEIAFAOIgKAEQgFABgFAAQgGAAgEgCg");
		this.shape_4.setTransform(61.075, 1.2);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#47474C").s().p("AgVAlQgHgDgDgGQgEgFAAgHQAAgLAIgFQAIgHAPAAIAXAAIAAgCQAAgIgFgFQgFgDgJAAQgFAAgGABQgGACgGAFIgHgNIAKgFIALgDQAGgCAGAAQAQAAAIAIQAIAHABANIAAA0IgRAAIAAgKQgEAFgHADQgHACgIAAQgIAAgGgDgAgOAHQgEADAAAFQAAAFAEAEQAEADAHAAQAIAAAHgEQAGgEABgHIAAgIIgVAAQgIAAgEADg");
		this.shape_5.setTransform(53.325, 2.1);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#47474C").s().p("AgDAvQgFgCgDgFQgDgGAAgHIAAgpIgMAAIAAgNIAMAAIAAgWIAQAAIAAAWIAXAAIAAANIgXAAIAAAlQAAAHACACQACACAEAAIAGAAIAGgEIAFAOIgKAEQgFABgFAAQgGAAgEgCg");
		this.shape_6.setTransform(46.175, 1.2);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#47474C").s().p("AAVAoIAAgsQAAgJgFgFQgFgFgJAAQgJAAgGAGQgGAGgBAKIAAApIgRAAIAAhPIARAAIAAAQQAFgJAHgDQAHgEAKAAQAOAAAHAIQAIAIAAAPIAAAwg");
		this.shape_7.setTransform(38.175, 2.075);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#47474C").s().p("AgTAkQgJgGgFgJQgFgIAAgNQAAgLAFgJQAFgJAJgFQAJgGALAAQAOABAJAFQAJAGADALQAEAKgBAOIg8AAQADAJAGAFQAHAGAIAAQAHAAAGgCQAFgDAFgEIAJAJQgGAHgIADQgJAEgKgBQgMAAgJgEgAAYgFQgBgKgGgFQgGgFgJAAQgJAAgGAFQgGAFgCAKIAtAAIAAAAg");
		this.shape_8.setTransform(28.7361, 2.1);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#47474C").s().p("AgIA5IAAhPIAQAAIAABPgAgHgmQgCgDAAgEQAAgFACgCQAEgEADAAQAEAAADAEQADACAAAFQAAAEgDADQgDADgEABQgDgBgEgDg");
		this.shape_9.setTransform(22.2, 0.45);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#47474C").s().p("AgWAoIAAhPIASAAIAAAQQAEgIAGgEQAHgEAJAAIAAAQQgHAAgGADQgHACgCAFQgDAGgBAHIAAAog");
		this.shape_10.setTransform(17.65, 2.075);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#47474C").s().p("AgbAuQgNgHgHgMQgHgMgBgPQABgOAHgMQAHgMANgHQAMgHAPAAQAQAAAMAHQANAHAHAMQAHAMABAOQgBAPgHAMQgHAMgNAHQgMAHgQAAQgPAAgMgHgAgSgfQgIAFgFAIQgFAJgBAJQABAKAFAJQAFAIAIAGQAJAEAJAAQALAAAIgEQAIgGAFgIQAFgJAAgKQAAgJgFgJQgFgIgIgFQgIgFgLAAQgJAAgJAFg");
		this.shape_11.setTransform(8.075, 0.85);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, -11, 196, 22);


	(lib.panel_etage = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_3
		this.panel_etage_txt = new cjs.Text("x", "15px 'Montserrat'", "#47474C");
		this.panel_etage_txt.name = "panel_etage_txt";
		this.panel_etage_txt.lineHeight = 21;
		this.panel_etage_txt.lineWidth = 137;
		this.panel_etage_txt.parent = this;
		this.panel_etage_txt.setTransform(57, -6);

		this.timeline.addTween(cjs.Tween.get(this.panel_etage_txt).wait(1));

		// Calque_2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#47474C").s().p("AgGAdQgCgCgBgFQABgEACgDQACgDAEAAQAEAAACADQADADAAAEQAAAFgDACQgCADgEAAQgEAAgCgDgAgGgOQgCgDgBgEQABgFACgDQACgCAEAAQAEAAACACQADADAAAFQAAAEgDADQgCACgEABQgEgBgCgCg");
		this.shape.setTransform(50.65, 3.025);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#47474C").s().p("AgTAkQgJgGgFgJQgFgIAAgNQAAgLAFgJQAFgJAJgFQAJgGALAAQAOABAJAFQAJAGADALQAEAKgBAOIg8AAQADAJAGAFQAHAGAIAAQAHAAAGgCQAFgDAFgEIAJAJQgGAHgIADQgJAEgKgBQgMAAgJgEgAAYgFQgBgKgGgFQgGgFgJAAQgJAAgGAFQgGAFgCAKIAtAAIAAAAg");
		this.shape_1.setTransform(40.7861, 2.1);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#47474C").s().p("AgSA0QgJgDgGgEIAHgNQAFAEAGACQAHACAGAAQALAAAHgFQAGgHAAgKIAAgKQgEAHgGADQgHAEgIgBQgKAAgJgEQgHgFgFgJQgFgIAAgLQAAgLAFgJQAEgIAIgFQAIgFAKAAQAJAAAGADQAIAEADAGIAAgMIARAAIAABHQAAALgEAIQgGAJgJAFQgJAEgLAAQgKAAgIgDgAgMglQgEADgEAGQgDAGAAAGQAAAIADAGQAEAEAEADQAGADAGAAQAHAAAEgDQAGgDADgEQACgGAAgIQAAgLgGgGQgGgHgKAAQgGAAgGADg");
		this.shape_2.setTransform(31.25, 3.55);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#47474C").s().p("AgVAlQgHgDgDgGQgEgFAAgHQAAgLAIgFQAIgHAPAAIAXAAIAAgCQAAgIgFgFQgFgDgJAAQgFAAgGABQgGACgGAFIgHgNIAKgFIALgDQAGgCAGAAQAQAAAIAIQAIAHABANIAAA0IgRAAIAAgKQgEAFgHADQgHACgIAAQgIAAgGgDgAgOAHQgEADAAAFQAAAFAEAEQAEADAHAAQAIAAAHgEQAGgEABgHIAAgIIgVAAQgIAAgEADg");
		this.shape_3.setTransform(22.125, 2.1);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#47474C").s().p("AgDAvQgFgCgDgFQgDgGAAgHIAAgpIgMAAIAAgNIAMAAIAAgWIAQAAIAAAWIAXAAIAAANIgXAAIAAAlQAAAHACACQACACAEAAIAGAAIAGgEIAFAOIgKAEQgFABgFAAQgGAAgEgCg");
		this.shape_4.setTransform(14.975, 1.2);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#47474C").s().p("AglBFIAAhoIBKAAIAAAQIg5AAIAAAcIAzAAIAAAPIgzAAIAAAdIA6AAIAAAQgAgKguIAPgWIASAHIgSAPg");
		this.shape_5.setTransform(7.225, -0.825);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, -11, 196, 22);


	(lib.panel_bt_fiche = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AgQAfQgIgFgEgIQgFgHAAgLQAAgJAFgJQAEgHAIgFQAIgEAJAAQAMAAAIAFQAHAFAEAJQADAJgBALIg0AAQACAJAGAEQAGAFAHAAQAGAAAFgCQAEgCAEgEIAIAJQgFAFgHADQgHADgJAAQgKAAgIgEgAAVgEQgBgIgFgGQgFgEgJAAQgHAAgFAEQgFAGgCAIIAnAAIAAAAg");
		this.shape.setTransform(43.1375, 0.35);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AgQAtQgIgFgEgHQgFgIAAgKQAAgLAFgHQAEgIAIgEQAIgEAJgBQAMAAAIAGQAHAEAEAJQADAJgBAMIg0AAQACAIAGAFQAGAFAHgBQAGAAAFgCQAEgCAEgDIAIAIQgFAFgHADQgHAEgJAAQgKgBgIgEgAAVAJQgBgIgFgEQgFgEgJgBQgHABgFAEQgFAEgCAIIAnAAIAAAAgAgHgdIANgTIAPAGIgQANg");
		this.shape_1.setTransform(35.4875, -1.1);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIANAAIAABfg");
		this.shape_2.setTransform(29.7, -1.025);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIAOAAIAABfg");
		this.shape_3.setTransform(25.85, -1.025);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AgHAxIAAhEIAPAAIAABEgAgFggQgCgDgBgEQABgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
		this.shape_4.setTransform(22.1, -1.1);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("AgTAgQgFgDgDgFQgDgEAAgGQAAgKAHgFQAHgFAMAAIAUAAIAAgCQAAgHgEgEQgEgDgIAAIgJABQgGADgFADIgGgLIAJgEIAJgDIALgBQANAAAHAGQAIAHAAALIAAAsIgPAAIAAgIQgDAEgGADQgGACgHAAQgHAAgGgDgAgMAGQgEACAAAFQAAAFAEADQADADAHAAQAHgBAFgDQAFgEABgGIAAgGIgSAAQgHAAgDACg");
		this.shape_5.setTransform(16.275, 0.35);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("AgCApQgFgCgDgFQgCgEAAgHIAAgjIgKAAIAAgLIAKAAIAAgTIANAAIAAATIAVAAIAAALIgVAAIAAAhQAAAEADADQABACAEAAIAFgBIAFgDIAEAMIgIAEIgJABQgFAAgDgCg");
		this.shape_6.setTransform(10.05, -0.45);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("AgQAtQgIgFgEgHQgFgIAAgKQAAgLAFgHQAEgIAIgEQAIgEAJgBQAMAAAIAGQAHAEAEAJQADAJgBAMIg0AAQACAIAGAFQAGAFAHgBQAGAAAFgCQAEgCAEgDIAIAIQgFAFgHADQgHAEgJAAQgKgBgIgEgAAVAJQgBgIgFgEQgFgEgJgBQgHABgFAEQgFAEgCAIIAnAAIAAAAgAgHgdIANgTIAPAGIgQANg");
		this.shape_7.setTransform(3.5375, -1.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AgUAsQgHgFgEgHQgEgIAAgLQAAgKAEgHQAEgIAHgFQAIgEAKAAQAHAAAGADQAGAEAEAGIAAgoIAPAAIAABgIgPAAIAAgMQgDAGgHADQgGAEgHAAQgKgBgIgEgAgKgFQgFADgCAEQgDAFAAAHQAAAGADAFQACAFAFADQAFADAFAAQAGAAAFgDQAFgDADgFQACgFAAgGQAAgHgCgFQgDgFgFgCQgFgDgGAAQgFAAgFADg");
		this.shape_8.setTransform(-5.075, -1);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFFFF").s().p("AgQAfQgIgFgEgIQgFgHAAgLQAAgJAFgJQAEgHAIgFQAIgEAJAAQAMAAAIAFQAHAFAEAJQADAJgBALIg0AAQACAJAGAEQAGAFAHAAQAGAAAFgCQAEgCAEgEIAIAJQgFAFgHADQgHADgJAAQgKAAgIgEgAAVgEQgBgIgFgGQgFgEgJAAQgHAAgFAEQgFAGgCAIIAnAAIAAAAg");
		this.shape_9.setTransform(-16.3125, 0.35);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AASAwIAAgnQAAgIgEgDQgEgEgIAAQgGAAgEADQgEACgDAEQgCAFAAAGIAAAiIgPAAIAAhfIAPAAIAAApQAEgIAGgDQAHgEAHABQANAAAGAHQAHAHAAALIAAArg");
		this.shape_10.setTransform(-24.375, -1.025);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFFFFF").s().p("AgPAfQgHgFgEgIQgFgHAAgLQAAgJAFgJQAEgHAHgFQAJgEAJAAQAJAAAHADQAIADAEAFIgIAKQgDgEgGgCQgEgCgHAAQgEAAgFACQgFADgDAFQgCAFAAAGQAAAGACAGQADAEAFAEQAFACAEAAQAHAAAFgCQAFgCAEgEIAIAIQgEAHgIADQgHADgKAAQgJAAgJgEg");
		this.shape_11.setTransform(-32.55, 0.35);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFFFFF").s().p("AgGAxIAAhEIAOAAIAABEgAgFggQgDgDABgEQgBgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
		this.shape_12.setTransform(-38.05, -1.1);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AgeAtIAAhaIA8AAIAAAOIgsAAIAAAbIAoAAIAAAMIgoAAIAAAlg");
		this.shape_13.setTransform(-43.1, -0.75);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(4));

		// Calque_1
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#6C717B").s().p("AzgDXIAAmtMAnBAAAIAAGtg");

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FFFFFF").s().p("AgQAfQgIgFgEgIQgFgHAAgLQAAgJAFgJQAEgHAIgFQAIgEAJAAQAMAAAIAFQAHAFAEAJQADAJgBALIg0AAQACAJAGAEQAGAFAHAAQAGAAAFgCQAEgCAEgEIAIAJQgFAFgHADQgHADgJAAQgKAAgIgEgAAVgEQgBgIgFgGQgFgEgJAAQgHAAgFAEQgFAGgCAIIAnAAIAAAAg");
		this.shape_15.setTransform(43.1375, 0.35);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#FFFFFF").s().p("AgQAtQgIgFgEgHQgFgIAAgKQAAgLAFgHQAEgIAIgEQAIgEAJgBQAMAAAIAGQAHAEAEAJQADAJgBAMIg0AAQACAIAGAFQAGAFAHgBQAGAAAFgCQAEgCAEgDIAIAIQgFAFgHADQgHAEgJAAQgKgBgIgEgAAVAJQgBgIgFgEQgFgEgJgBQgHABgFAEQgFAEgCAIIAnAAIAAAAgAgHgdIANgTIAPAGIgQANg");
		this.shape_16.setTransform(35.4875, -1.1);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIANAAIAABfg");
		this.shape_17.setTransform(29.7, -1.025);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFFFFF").s().p("AgGAwIAAhfIAOAAIAABfg");
		this.shape_18.setTransform(25.85, -1.025);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FFFFFF").s().p("AgHAxIAAhEIAPAAIAABEgAgFggQgCgDgBgEQABgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
		this.shape_19.setTransform(22.1, -1.1);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#FFFFFF").s().p("AgTAgQgFgDgDgFQgDgEAAgGQAAgKAHgFQAHgFAMAAIAUAAIAAgCQAAgHgEgEQgEgDgIAAIgJABQgGADgFADIgGgLIAJgEIAJgDIALgBQANAAAHAGQAIAHAAALIAAAsIgPAAIAAgIQgDAEgGADQgGACgHAAQgHAAgGgDgAgMAGQgEACAAAFQAAAFAEADQADADAHAAQAHgBAFgDQAFgEABgGIAAgGIgSAAQgHAAgDACg");
		this.shape_20.setTransform(16.275, 0.35);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#FFFFFF").s().p("AgCApQgFgCgDgFQgCgEAAgHIAAgjIgKAAIAAgLIAKAAIAAgTIANAAIAAATIAVAAIAAALIgVAAIAAAhQAAAEADADQABACAEAAIAFgBIAFgDIAEAMIgIAEIgJABQgFAAgDgCg");
		this.shape_21.setTransform(10.05, -0.45);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#FFFFFF").s().p("AgQAtQgIgFgEgHQgFgIAAgKQAAgLAFgHQAEgIAIgEQAIgEAJgBQAMAAAIAGQAHAEAEAJQADAJgBAMIg0AAQACAIAGAFQAGAFAHgBQAGAAAFgCQAEgCAEgDIAIAIQgFAFgHADQgHAEgJAAQgKgBgIgEgAAVAJQgBgIgFgEQgFgEgJgBQgHABgFAEQgFAEgCAIIAnAAIAAAAgAgHgdIANgTIAPAGIgQANg");
		this.shape_22.setTransform(3.5375, -1.1);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#FFFFFF").s().p("AgUAsQgHgFgEgHQgEgIAAgLQAAgKAEgHQAEgIAHgFQAIgEAKAAQAHAAAGADQAGAEAEAGIAAgoIAPAAIAABgIgPAAIAAgMQgDAGgHADQgGAEgHAAQgKgBgIgEgAgKgFQgFADgCAEQgDAFAAAHQAAAGADAFQACAFAFADQAFADAFAAQAGAAAFgDQAFgDADgFQACgFAAgGQAAgHgCgFQgDgFgFgCQgFgDgGAAQgFAAgFADg");
		this.shape_23.setTransform(-5.075, -1);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#FFFFFF").s().p("AgQAfQgIgFgEgIQgFgHAAgLQAAgJAFgJQAEgHAIgFQAIgEAJAAQAMAAAIAFQAHAFAEAJQADAJgBALIg0AAQACAJAGAEQAGAFAHAAQAGAAAFgCQAEgCAEgEIAIAJQgFAFgHADQgHADgJAAQgKAAgIgEgAAVgEQgBgIgFgGQgFgEgJAAQgHAAgFAEQgFAGgCAIIAnAAIAAAAg");
		this.shape_24.setTransform(-16.3125, 0.35);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FFFFFF").s().p("AASAwIAAgnQAAgIgEgDQgEgEgIAAQgGAAgEADQgEACgDAEQgCAFAAAGIAAAiIgPAAIAAhfIAPAAIAAApQAEgIAGgDQAHgEAHABQANAAAGAHQAHAHAAALIAAArg");
		this.shape_25.setTransform(-24.375, -1.025);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#FFFFFF").s().p("AgPAfQgHgFgEgIQgFgHAAgLQAAgJAFgJQAEgHAHgFQAJgEAJAAQAJAAAHADQAIADAEAFIgIAKQgDgEgGgCQgEgCgHAAQgEAAgFACQgFADgDAFQgCAFAAAGQAAAGACAGQADAEAFAEQAFACAEAAQAHAAAFgCQAFgCAEgEIAIAIQgEAHgIADQgHADgKAAQgJAAgJgEg");
		this.shape_26.setTransform(-32.55, 0.35);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AgGAxIAAhEIAOAAIAABEgAgFggQgDgDABgEQgBgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
		this.shape_27.setTransform(-38.05, -1.1);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#FFFFFF").s().p("AgeAtIAAhaIA8AAIAAAOIgsAAIAAAbIAoAAIAAAMIgoAAIAAAlg");
		this.shape_28.setTransform(-43.1, -0.75);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("rgba(108,113,123,0.8)").s().p("AzgDXIAAmtMAnBAAAIAAGtg");

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#00FFFF").s().p("AzhDXIAAmtMAnDAAAIAAGtg");

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_14 }] }).to({ state: [{ t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 2).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-124.9, -21.5, 249.9, 43);


	(lib.panel_bt_fermer = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Croix
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#B6B9BE").s().p("AAlA+IglglIgkAlQgEADgEAAQgFAAgEgDIgIgIQgDgEgBgEQABgFADgEIAmglIgmgkQgDgEgBgEQABgFADgEIAIgIQAEgDAFAAQAEAAAEADIAkAlIAlglQADgDAFAAQAFAAADADIAJAIQAEAEAAAFQAAAEgEAEIglAkIAlAlQAEAEAAAFQAAAEgEAEIgJAIQgDADgFAAQgFAAgDgDg");
		this.shape.setTransform(0, 0);

		// Cercle
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#717175").ss(0.3, 0, 0, 4).p("AAAipQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyQgygyAAhGQAAhFAygyQAygyBFAAg");
		this.shape_1.setTransform(0.025, 0);

		// Fond
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAxhGABQhFgBgygxg");
		this.shape_2.setTransform(0.025, 0);

		// Croix hover
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#6C717B").s().p("AAlA+IglglIgkAlQgEADgEAAQgFAAgEgDIgIgIQgDgEgBgEQABgFADgEIAmglIgmgkQgDgEgBgEQABgFADgEIAIgIQAEgDAFAAQAEAAAEADIAkAlIAlglQADgDAFAAQAFAAADADIAJAIQAEAEAAAFQAAAEgEAEIglAkIAlAlQAEAEAAAFQAAAEgEAEIgJAIQgDADgFAAQgFAAgDgDg");
		this.shape_3.setTransform(0, 0);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#00FFFF").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
		this.shape_4.setTransform(0.025, 0);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 2).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-17.9, -17.9, 35.9, 35.9);

	(lib.picto_picture_ombre = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgsAcQgRgMgBgQQABgPARgMQATgLAZAAQAaAAASALQATAMAAAPQAAAQgTAMQgSALgaAAQgZAAgTgLg");
		this.shape.setTransform(0, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-6.2, -3.9, 12.5, 7.9);


	(lib.picto_picture_corps = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AiNB3QgKAAgHgHQgHgHAAgKIAAgYIA/g4QAGgGAJAFIA/AqIBXhXQAEgEAEAAIAGACIBZAtIAABTQAAAKgHAHQgGAHgKAAgAhrg5QgLgKAAgPQAAgHADgGQADgHAFgFQAGgGAGgCQAGgDAHAAQAPAAAKALQALAKAAAPQAAAPgLAKQgKALgPAAQgPAAgKgLg");
		this.shape.setTransform(-0.025, -27.875);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#797E83").s().p("AhIBiIhFAAQgVAAgNgOQgOgOAAgUIAAjsQAAgUAOgNQANgOAVAAIEbAAQAUAAAOAOQAOANAAAUIAADsQAAAUgOAOQgOAOgUAAIhGAAIhICIgAhngcIg/A3IAAAXQAAAKAIAHQAGAHALAAIEbAAQAKAAAHgHQAHgHAAgKIAAhSIhZguIgGgBQgEgBgFAEIhWBXIg/gpQgEgCgEAAQgEAAgEAEgAhfigQgHADgGAFQgFAGgCAGQgDAGAAAHQAAAPAKALQALAKAOAAQAPAAALgKQAKgLAAgPQAAgOgKgLQgLgKgPAAQgGAAgGACg");
		this.shape_1.setTransform(0, -23.425);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-19, -46.8, 38, 46.8);

	(lib.picto_maison_ombre = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgsAcQgRgMgBgQQABgPARgMQATgLAZAAQAaAAASALQATAMAAAPQAAAQgTAMQgSALgaAAQgZAAgTgLg");
		this.shape.setTransform(0, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-6.2, -3.9, 12.5, 7.9);


	(lib.picto_maison_corps = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AEoJNIq3noQgTgMgKgUQgKgUAAgWIAAocQAAgmAbgbQAagaAmAAIK3AAQAmAAAbAaQAaAbAAAmIAAQDQAAAagNAVQgOAWgWAMQgTAKgXAAQgcAAgYgQg");
		this.shape.setTransform(9.982, -45.0331, 0.0526, 0.0526);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("EAKuAgdQglABgbgbQgagbAAgmMAAAggwIyaAAMAAAAgwQAAAmgbAbQgbAbglgBI4UAAQgmABgbgbQgagbAAgmMAAAgllQAAgXAKgUQAKgTASgNMAi9gYfQAXgQAcAAQAdAAAXAQMAixAYWQASANAKAUQAKATAAAXMAAAAluQAAAmgaAbQgbAbglgBg");
		this.shape_1.setTransform(-0.0343, -29.4348, 0.0526, 0.0526);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("EAnJAV2MgnJgbZMgnIAbZQgXARgdAAQgWAAgTgKQgUgKgNgTImUpAQgVgeAGglQAHgmAfgVMAuPggXQAYgRAcAAQAcAAAYARMAuQAgXQAfAWAHAlQAGAlgVAeImUJAQgVAfglAHIgQABQgcAAgYgRg");
		this.shape_2.setTransform(-0.0023, -40.476, 0.0526, 0.0526);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#797E83").s().p("EAAMBPPMgWSgpPI3yAAQkVgBjGjFQjGjGAAkWMAAAhgKQAAkWDGjGQDGjGEVAAMBbwAAAQEWAADGDGQDGDGAAEWMAAABgKQAAEWjGDGQjGDFkWABI3ZAAMgWSApPg");
		this.shape_3.setTransform(-0.0014, -25.9729, 0.0526, 0.0526);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-19, -46.8, 38, 46.8);

	(lib.puce = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.puce_corps = new lib.puce_corps("synched", 0);
		this.puce_corps.name = "puce_corps";
		this.puce_corps.setTransform(0, -4);

		this.puce_ombre = new lib.puce_ombre("synched", 0);
		this.puce_ombre.name = "puce_ombre";
		this.puce_ombre.setTransform(0, -4);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.puce_ombre }, { t: this.puce_corps }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.puce, new cjs.Rectangle(-16.9, -50, 33.9, 50), null);

	(lib.picto_picture = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.picto_picture_corps = new lib.picto_picture_corps("synched", 0);
		this.picto_picture_corps.name = "picto_picture_corps";
		this.picto_picture_corps.setTransform(0, -26.6, 1, 1, 0, 0, 0, 0, -23.4);

		this.instance = new lib.picto_picture_ombre("synched", 0);
		this.instance.setTransform(0, -3.2, 1, 0.8089);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }, { t: this.picto_picture_corps }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-19, -50, 38, 50);

	(lib.picto_maison = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.instance = new lib.picto_maison_corps("synched", 0);
		this.instance.parent = this;
		this.instance.setTransform(0, -26.6, 1, 1, 0, 0, 0, 0, -23.4);

		this.instance_1 = new lib.picto_maison_ombre("synched", 0);
		this.instance_1.parent = this;
		this.instance_1.setTransform(0, -3.2, 1, 0.8089);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-19, -50, 38, 50);


	(lib.panel_plan = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.panel_plan_image = new cjs.Bitmap(pdv_pas_de_plan);
		// this.panel_plan_image.image.crossOrigin = "Anonymous";
		this.panel_plan_image.name = "panel_plan_image";
		this.panel_plan_image.setTransform(119, 84, 1, 1, 0, 0, 0, pdv_vignette_size.width, pdv_vignette_size.height);

		this.panel_plan_background = new cjs.Shape();
		this.panel_plan_background.graphics.f("#FFFFFF").s("#B5B8BB").rect(0, 0, 240, 170);
		this.panel_plan_background.setTransform(-120, -85);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_plan_background }, { t: this.panel_plan_image }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.panel_plan, new cjs.Rectangle(-120, -85, 240, 170), null);


	(lib.panel_bt_coeur = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.panel_bt_coeur_ico = new lib.panel_bt_coeur_ico("synched", 0);
		this.panel_bt_coeur_ico.name = "panel_bt_coeur_ico";
		this.panel_bt_coeur_ico.setTransform(0.05, 0.4);

		this.panel_bt_coeur_ico_color = new lib.panel_bt_coeur_ico_color("synched", 0);
		this.panel_bt_coeur_ico_color.name = "panel_bt_coeur_ico_color";
		this.panel_bt_coeur_ico_color.setTransform(0.05, 0.4);

		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#717175").ss(0.3, 0, 0, 4).p("AAAisQBHAAA0AyQAzAzAABHQAABIgzAzQg0AyhHAAQhHAAgzgyQgzgzAAhIQAAhHAzgzQAzgyBHAAg");
		this.shape.setTransform(0, 0.025);

		this.shape_color = new cjs.Shape();
		this.shape_color.graphics.f().s("#d36464").ss(0.3, 0, 0, 4).p("AAAisQBHAAA0AyQAzAzAABHQAABIgzAzQg0AyhHAAQhHAAgzgyQgzgzAAhIQAAhHAzgzQAzgyBHAAg");
		this.shape_color.setTransform(0, 0.025);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFF").s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgyBHAAQBHAAAzAyQA0AzAABHQAABIg0AzQgzAyhHAAQhHAAgzgyg");
		this.shape_1.setTransform(0, 0.025);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#00FFFF").s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgyBHAAQBHAAAzAyQA0AzAABHQAABIg0AzQgzAyhHAAQhHAAgzgyg");
		this.shape_2.setTransform(0, 0.025);

		this.timeline.addTween(cjs.Tween.get({})
			.to({ state: [{ t: this.shape_1 }, { t: this.shape }, { t: this.panel_bt_coeur_ico }] })
			.to({ state: [{ t: this.shape_1 }, { t: this.shape_color }, { t: this.panel_bt_coeur_ico_color }] }, 1)
			.to({ state: [{ t: this.shape_2 }] }, 2).wait(1));
		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-18.3, -18.3, 36.7, 36.7);


	(lib.panel = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// ACTION
		this.panel_bt_coeur = new lib.panel_bt_coeur();
		this.panel_bt_coeur.name = "panel_bt_coeur";
		this.panel_bt_coeur.setTransform(240.75, -167.65);
		new cjs.ButtonHelper(this.panel_bt_coeur, "out", "hover", "down", false, new lib.panel_bt_coeur(), 3);

		this.panel_bt_fermer = new lib.panel_bt_fermer();
		this.panel_bt_fermer.name = "panel_bt_fermer";
		this.panel_bt_fermer.setTransform(241.35, -207);
		new cjs.ButtonHelper(this.panel_bt_fermer, 0, 1, 2, false, new lib.panel_bt_fermer(), 3);

		this.panel_bt_fiche = new lib.panel_bt_fiche();
		this.panel_bt_fiche.name = "panel_bt_fiche";
		this.panel_bt_fiche.setTransform(128.45, -58.45);
		new cjs.ButtonHelper(this.panel_bt_fiche, 0, 1, 2, false, new lib.panel_bt_fiche(), 3);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_bt_fiche }, { t: this.panel_bt_fermer }, { t: this.panel_bt_coeur }] }).wait(1));
		this.panel_bt_coeur.addEventListener("tick", AdobeAn.handleFilterCache);

		// PREMIER_PLAN
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#EAEAEB").ss(1, 0, 0, 4).p("AvJAAIeTAA");
		this.shape.setTransform(103.725, -174.2);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		// TXT_HEADER
		this.panel_numlot_prix = new lib.panel_numlot_prix("synched", 0);
		this.panel_numlot_prix.name = "panel_numlot_prix";
		this.panel_numlot_prix.setTransform(117.8, -184);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_numlot_prix }] }).wait(1));

		// TXT_INFO
		this.panel_orientation = new lib.panel_orientation("synched", 0);
		this.panel_orientation.name = "panel_orientation";
		this.panel_orientation.setTransform(96.05, -113.3, 1, 1, 0, 0, 0, 91.5, 0);

		this.panel_etage = new lib.panel_etage("synched", 0);
		this.panel_etage.name = "panel_etage";
		this.panel_etage.setTransform(96.05, -134.35, 1, 1, 0, 0, 0, 91.5, 0);

		this.panel_superficie = new lib.panel_superficie("synched", 0);
		this.panel_superficie.name = "panel_superficie";
		this.panel_superficie.setTransform(96.05, -155.3, 1, 1, 0, 0, 0, 91.5, 0);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_superficie }, { t: this.panel_etage }, { t: this.panel_orientation }] }).wait(1));

		// ELEMENTS_DYNAMIQUES
		this.panel_plan = new lib.panel_plan();
		this.panel_plan.name = "panel_plan";
		this.panel_plan.setTransform(-135.95, -133.05);

		this.panel_typo_carre = new lib.type_couleur("synched", 0);
		this.panel_typo_carre.name = "panel_typo_carre";
		this.panel_typo_carre.setTransform(6.3, -199.4, 1, 1, 0, 0, 0, -18.5, 0);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_typo_carre }, { t: this.panel_plan }] }).wait(1));

		// ARRIERE_PLAN
		this.panel_background = new lib.panel_background("synched", 0);
		this.panel_background.name = "panel_background";
		this.panel_background.setTransform(0, -128.45);

		this.panel_fleche = new lib.panel_fleche("synched", 0);
		this.panel_fleche.name = "panel_fleche";
		this.panel_fleche.setTransform(-0.8, 0);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.panel_fleche }, { t: this.panel_background }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-268.4, -238.1, 536.9, 238.1);


	// stage content:
	(lib.container = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// picto_picture
		this.picto_picture = new lib.picto_picture();
		this.picto_picture.name = "picto_picture";
		this.puce.setTransform(1009.45, 795.3, 1, 1, 0, 0, 0, 0, -4.2);

		// picto_maison
		this.picto_maison = new lib.picto_maison();
		this.picto_maison.name = "picto_maison";
		this.puce.setTransform(1009.45, 795.3, 1, 1, 0, 0, 0, 0, -4.2);

		// puce
		this.puce = new lib.puce();
		this.puce.name = "puce";
		this.puce.setTransform(1009.45, 795.3, 1, 1, 0, 0, 0, 0, -4.2);

		this.timeline.addTween(cjs.Tween.get(this.puce).wait(1));

		// container
		this.panel = new lib.panel("synched", 0);
		this.panel.name = "panel";
		this.panel.setTransform(960, 659.05);

		this.timeline.addTween(cjs.Tween.get(this.panel).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(1651.6, 961, -423.0999999999999, -161.5);
	// library properties:
	lib.properties = {
		id: 'ADB885D4D84E564FB7CEA253A64788C1',
		width: 1920,
		height: 1080,
		fps: 120,
		color: "#FF00FF",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

	p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['ADB885D4D84E564FB7CEA253A64788C1'] = {
		getStage: function () { return exportRoot.stage; },
		getLibrary: function () { return lib; },
		getSpriteSheet: function () { return ss; },
		getImages: function () { return img; }
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}


	an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				}
				else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			domContainers[0].width = w * pRatio * sRatio;
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function (container) {
				container.style.width = w * sRatio + 'px';
				container.style.height = h * sRatio + 'px';
			});
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	an.handleSoundStreamOnTick = function (event) {
		if (!event.paused) {
			var stageChild = stage.getChildAt(0);
			if (!stageChild.paused || stageChild.ignorePause) {
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function (event) {
		if (!event.paused) {
			var target = event.target;
			if (target) {
				if (target.filterCacheList) {
					for (var index = 0; index < target.filterCacheList.length; index++) {
						var cacheInst = target.filterCacheList[index];
						if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;

