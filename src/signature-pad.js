(function(exports){
  var SignaturePad = function() {
    if(!(this instanceof SignaturePad)){
      return new SignaturePad();
    }

    this.endpoint  = "https://www.signature.io";
    this.uuid      = this.Uuid();
    this.script    = this.CurrentlyExecutedScript();
    if (this.script) {
      this.key      = this.script.getAttribute("data-signature-key");

      var data_signature_endpoint = this.script.getAttribute("data-signature-endpoint");
      if (data_signature_endpoint) {
        this.endpoint = data_signature_endpoint;
      }  
    }

    this.init();

    return this;
  };

  SignaturePad.prototype.init = function() {
    if (this.script) {
      this.script.className += " signature-pad-script";
      this.script.id        = "signature-pad-script-"+this.uuid;

      this.draw();
      this.events();
      SignatureMark(this.canvas);
    } else {
      console.error("Could not find script tag to initialize on.");
    }
  };

  exports.SignaturePad = SignaturePad;

}(this));