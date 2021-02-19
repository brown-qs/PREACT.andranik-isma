export class ConceptSearchProperties {
  id: String;
  text: String;
  searchAsSubtext: Boolean;
  searchInRoots: Boolean;
  language: Number;
  baseRole: String;
  baseRoleInv: Boolean;
  frequency: String;
  frequencyInv: Boolean;
  rootNumber: String;
  rootNumberInv: Boolean;
  synNumber: String;
  synNumberInv: Boolean;
  role: String;
  roleInv: Boolean;
  defNumber: String;
  defNumberInv: Boolean;
  relations: Array<RelationSearchProperties>;
  className: String;
  classNameInv: Boolean;
  classInClasses: Boolean;
  classDist: String;
  envName: String;
  envNameInv: Boolean;
  envInEnvs: Boolean;
  envDist: String;

  constructor() {
    this.id = "";
    this.text = "agricultural";
    this.searchAsSubtext = false;
    this.searchInRoots = false;
    this.language = 0;
    this.baseRole = "ANY";
    this.baseRoleInv = false;
    this.frequency = "ANY";
    this.frequencyInv = false;
    this.rootNumber = "ANY";
    this.rootNumberInv = false;
    this.synNumber = "ANY";
    this.synNumberInv = false;
    this.role = "ANY";
    this.roleInv = false;
    this.defNumber = "";
    this.defNumberInv = false;
    this.relations = [];
    this.className = "";
    this.classNameInv = false;
    this.classInClasses = true;
    this.classDist = "ANY";
    this.envName = "";
    this.envNameInv = false;
    this.envInEnvs = true;
    this.envDist = "";
  }
}
export class RelationSearchProperties {
  code1: String;
  code2: String;
  conceptName: String;
  prob: String;
  inv: Number;
  andor: Number;
  constructor() {
    this.code1 = "";
    this.code2 = "";
    this.conceptName = "";
    this.prob = "";
    this.inv = 0;
    this.andor = 1;
  }
}

export class ProgramSearchProperties {
  word: String;
  language: Number;
  type: Number;
  stage: Number;
  text: String;
  commText: String;
  constructor() {
    this.word = "";
    this.language = 0;
    this.type = 0;
    this.stage = 0;
    this.text = "";
    this.commText = "";
  }
}
