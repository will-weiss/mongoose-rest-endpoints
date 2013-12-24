var HttpError,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

module.exports = HttpError = (function(_super) {
  __extends(HttpError, _super);

  HttpError.forge = function(msg, code) {
    var listener, _i, _len, _ref;
    if (this.listeners[code] != null) {
      _ref = this.listeners[code];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        listener = _ref[_i];
        listener(msg);
      }
    }
    return new this(msg, null, null, code);
  };

  function HttpError(msg, fileName, lineNumber, code) {
    this.code = code;
    HttpError.__super__.constructor.apply(this, arguments);
  }

  HttpError.listeners = {};

  HttpError.listen = function(code, callback) {
    if (this.listeners[code] == null) {
      this.listeners[code] = [];
    }
    return this.listeners[code].push(callback);
  };

  return HttpError;

})(Error);