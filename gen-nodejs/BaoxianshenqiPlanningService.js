//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./baoxianshenqi_types');
//HELPER FUNCTIONS AND STRUCTURES

BaoxianshenqiPlanningService_getPlanningByPerson_args = function(args) {
  this.protocontent = null;
  this.companyid = null;
  if (args) {
    if (args.protocontent !== undefined) {
      this.protocontent = args.protocontent;
    }
    if (args.companyid !== undefined) {
      this.companyid = args.companyid;
    }
  }
};
BaoxianshenqiPlanningService_getPlanningByPerson_args.prototype = {};
BaoxianshenqiPlanningService_getPlanningByPerson_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.protocontent = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.companyid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningByPerson_args.prototype.write = function(output) {
  output.writeStructBegin('BaoxianshenqiPlanningService_getPlanningByPerson_args');
  if (this.protocontent !== null && this.protocontent !== undefined) {
    output.writeFieldBegin('protocontent', Thrift.Type.STRING, 1);
    output.writeString(this.protocontent);
    output.writeFieldEnd();
  }
  if (this.companyid !== null && this.companyid !== undefined) {
    output.writeFieldBegin('companyid', Thrift.Type.I32, 2);
    output.writeI32(this.companyid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningByPerson_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args instanceof ttypes.InvalidPlanningOperation) {
    this.ouch = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ouch !== undefined) {
      this.ouch = args.ouch;
    }
  }
};
BaoxianshenqiPlanningService_getPlanningByPerson_result.prototype = {};
BaoxianshenqiPlanningService_getPlanningByPerson_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new ttypes.InvalidPlanningOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningByPerson_result.prototype.write = function(output) {
  output.writeStructBegin('BaoxianshenqiPlanningService_getPlanningByPerson_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.ouch !== null && this.ouch !== undefined) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningByFamily_args = function(args) {
  this.protocontent = null;
  this.companyid = null;
  if (args) {
    if (args.protocontent !== undefined) {
      this.protocontent = args.protocontent;
    }
    if (args.companyid !== undefined) {
      this.companyid = args.companyid;
    }
  }
};
BaoxianshenqiPlanningService_getPlanningByFamily_args.prototype = {};
BaoxianshenqiPlanningService_getPlanningByFamily_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.protocontent = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.companyid = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningByFamily_args.prototype.write = function(output) {
  output.writeStructBegin('BaoxianshenqiPlanningService_getPlanningByFamily_args');
  if (this.protocontent !== null && this.protocontent !== undefined) {
    output.writeFieldBegin('protocontent', Thrift.Type.STRING, 1);
    output.writeString(this.protocontent);
    output.writeFieldEnd();
  }
  if (this.companyid !== null && this.companyid !== undefined) {
    output.writeFieldBegin('companyid', Thrift.Type.I32, 2);
    output.writeI32(this.companyid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningByFamily_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args instanceof ttypes.InvalidPlanningOperation) {
    this.ouch = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ouch !== undefined) {
      this.ouch = args.ouch;
    }
  }
};
BaoxianshenqiPlanningService_getPlanningByFamily_result.prototype = {};
BaoxianshenqiPlanningService_getPlanningByFamily_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new ttypes.InvalidPlanningOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningByFamily_result.prototype.write = function(output) {
  output.writeStructBegin('BaoxianshenqiPlanningService_getPlanningByFamily_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.ouch !== null && this.ouch !== undefined) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningBook_args = function(args) {
  this.protocontent = null;
  if (args) {
    if (args.protocontent !== undefined) {
      this.protocontent = args.protocontent;
    }
  }
};
BaoxianshenqiPlanningService_getPlanningBook_args.prototype = {};
BaoxianshenqiPlanningService_getPlanningBook_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.protocontent = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningBook_args.prototype.write = function(output) {
  output.writeStructBegin('BaoxianshenqiPlanningService_getPlanningBook_args');
  if (this.protocontent !== null && this.protocontent !== undefined) {
    output.writeFieldBegin('protocontent', Thrift.Type.STRING, 1);
    output.writeString(this.protocontent);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningBook_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args instanceof ttypes.InvalidPlanningOperation) {
    this.ouch = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ouch !== undefined) {
      this.ouch = args.ouch;
    }
  }
};
BaoxianshenqiPlanningService_getPlanningBook_result.prototype = {};
BaoxianshenqiPlanningService_getPlanningBook_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new ttypes.InvalidPlanningOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BaoxianshenqiPlanningService_getPlanningBook_result.prototype.write = function(output) {
  output.writeStructBegin('BaoxianshenqiPlanningService_getPlanningBook_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.ouch !== null && this.ouch !== undefined) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BaoxianshenqiPlanningServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
BaoxianshenqiPlanningServiceClient.prototype = {};
BaoxianshenqiPlanningServiceClient.prototype.getPlanningByPerson = function(protocontent, companyid, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getPlanningByPerson(protocontent, companyid);
};

BaoxianshenqiPlanningServiceClient.prototype.send_getPlanningByPerson = function(protocontent, companyid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPlanningByPerson', Thrift.MessageType.CALL, this.seqid);
  var args = new BaoxianshenqiPlanningService_getPlanningByPerson_args();
  args.protocontent = protocontent;
  args.companyid = companyid;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BaoxianshenqiPlanningServiceClient.prototype.recv_getPlanningByPerson = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BaoxianshenqiPlanningService_getPlanningByPerson_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ouch) {
    return callback(result.ouch);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPlanningByPerson failed: unknown result');
};
BaoxianshenqiPlanningServiceClient.prototype.getPlanningByFamily = function(protocontent, companyid, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getPlanningByFamily(protocontent, companyid);
};

BaoxianshenqiPlanningServiceClient.prototype.send_getPlanningByFamily = function(protocontent, companyid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPlanningByFamily', Thrift.MessageType.CALL, this.seqid);
  var args = new BaoxianshenqiPlanningService_getPlanningByFamily_args();
  args.protocontent = protocontent;
  args.companyid = companyid;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BaoxianshenqiPlanningServiceClient.prototype.recv_getPlanningByFamily = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BaoxianshenqiPlanningService_getPlanningByFamily_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ouch) {
    return callback(result.ouch);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPlanningByFamily failed: unknown result');
};
BaoxianshenqiPlanningServiceClient.prototype.getPlanningBook = function(protocontent, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getPlanningBook(protocontent);
};

BaoxianshenqiPlanningServiceClient.prototype.send_getPlanningBook = function(protocontent) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPlanningBook', Thrift.MessageType.CALL, this.seqid);
  var args = new BaoxianshenqiPlanningService_getPlanningBook_args();
  args.protocontent = protocontent;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BaoxianshenqiPlanningServiceClient.prototype.recv_getPlanningBook = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BaoxianshenqiPlanningService_getPlanningBook_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ouch) {
    return callback(result.ouch);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPlanningBook failed: unknown result');
};
BaoxianshenqiPlanningServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
BaoxianshenqiPlanningServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

BaoxianshenqiPlanningServiceProcessor.prototype.process_getPlanningByPerson = function(seqid, input, output) {
  var args = new BaoxianshenqiPlanningService_getPlanningByPerson_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.getPlanningByPerson(args.protocontent, args.companyid, function (err, result) {
    var result = new BaoxianshenqiPlanningService_getPlanningByPerson_result((err != null ? err : {success: result}));
    output.writeMessageBegin("getPlanningByPerson", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

BaoxianshenqiPlanningServiceProcessor.prototype.process_getPlanningByFamily = function(seqid, input, output) {
  var args = new BaoxianshenqiPlanningService_getPlanningByFamily_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.getPlanningByFamily(args.protocontent, args.companyid, function (err, result) {
    var result = new BaoxianshenqiPlanningService_getPlanningByFamily_result((err != null ? err : {success: result}));
    output.writeMessageBegin("getPlanningByFamily", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

BaoxianshenqiPlanningServiceProcessor.prototype.process_getPlanningBook = function(seqid, input, output) {
  var args = new BaoxianshenqiPlanningService_getPlanningBook_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.getPlanningBook(args.protocontent, function (err, result) {
    var result = new BaoxianshenqiPlanningService_getPlanningBook_result((err != null ? err : {success: result}));
    output.writeMessageBegin("getPlanningBook", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

