

export interface MockDataItem {
  id: number;
  board_id: number;
  contract_id: string;
  account_id: number;
  workflow_state: WorkflowState;
  meta: Meta;
  fields: Fields;
  state: string;
  order_items: OrderItem[];
  change_requests: any[];
  attachments: any[];
}

interface PurchaseContract {
  id: number;
  contract_id: string;
  account_id: number;
  workflow_state: WorkflowState;
  meta: Meta;
  fields: PurchaseContractFields;
  enquiries: Enquiry[];
}

interface Profile {
  id: number;
  name: string;
  email: string;
  pic: {
    filename: string;
    content_type: string;
    url: string;
    preview_url: string;
  };
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone_no?: string;
  initials: string;
  address?: string;
  type: string;
  image: {
    filename: string;
    content_type: string;
    url: string;
    preview_url: string;
  };
}

interface PurchaseContractFields {
  title: string;
  description: string;
  assignee: Profile;
  supplier: Contact;
  merchant: Contact;
  merchant_name: string;
  contract_date: string;
  delivery_date: string;
  attn: string;
  mobile: string;
  origin_country: LookupRecord;
  loading_port: LookupRecord;
  enquiries: Enquiry[];
  shipment_mode: LookupRecord;
  buyer_contract_id: string;
}

interface Enquiry {
  id: number;
  title: string;
  board_id: number;
  code: string;
  account_id: number;
  assignee: string;
  meta: Meta;
  workflow_state: WorkFlow;
  attachments: Attachment[];
  milestones: MileStone[];
  change_requests: Requests[];
  fields: Fields;
}

type Attachments = {
  filename: string;
  content_type: string;
  url: string;
};

type AttachmentGroup = {
  spec_sheet: Attachments;
  trims_file: Attachments;
  tech_pack: Attachments;
};

interface Requests {
  action: string;
  fields: {
    name: keyof Fields;
    value: any;
  }[];

  created_by: Profile;

  attachments: AttachmentGroup[];
}

type MileStone = {
  id: number;
  title: string;
  description: string;
  status: string;
  expected_completion_date: string;
  completion_date: string;
  duration: string;
  key: string;
};

interface WorkFlow {
  phase: string;
  stage: string;
  state: string;
  approval_state: string;
  review_stage: string;
  allowed_actions: string[];
  externals: string[];
  has_been_reviewed: boolean;
  allowed_transitions: Transition[];
  completed_milestones: string[];
}

interface LookupRecord {
  id: number;
  value: string;
  label: string;
  order: number;
  parent_label?: string;
  parent_id?: number;
}

interface Pagination {
  count: number;
  current: string;
  first: string;
  last: string;
  next: string;
  pages: number;
  per_page: number;
  previous: string;
}

interface Account {
  id: number;
  name: string;
  slug: string | undefined;
}

interface OrderItem {
  id: number;
  title: string;
  board_id: number;
  account_id: number;
  meta: Meta;
  workflow_state: WorkflowState;
  available_for: null;
  code: string;
  attachments: Attachment[];
  milestones: Milestone[];
  change_requests: any[];
  fields: OrderFields;
}

interface OrderFields {
  style_no: string;
  colour: string;
  gsm: string;
  combo: string;
  title: string;
  client: Client;
  packing: string;
  assignee: Assignee;
  quantity: string;
  age_group: string;
  tech_pack: Tech;
  spec_sheet: Tech;
  trims_file: Tech;
  buyer_quote: BuyerQuote;
  description: string;
  design_team: DesignTeam;
  sample_image: OrderSampleImage;
  packing_ratio: PackingRatio;
  fabric_quality: string;
  sales_contract: string;
  purchase_contract: string;
  supplier_quotations: SuppliersCollection;
  selected_supplier_quote: Suppliers;
  order_item_list: OrderItemlist[];
}

interface RegionalWiseQuantity {
  aux: number;
  dxb: number;
  aln: number;
  omn: number;
  qtr: number;
  bah: number;
  kwt: number;
  ksa: number;
}

interface SellingPrice {
  sp_ae: number;
  sp_qa: number;
  sp_sa: number;
  bh: number;
  sp_om: number;
  sp_kw: number;
}

interface OrderItemlist {
  fair_article: number;
  tag_article: number;
  tag_description: string;
  ean_code: number;
  regional_wise_quantity: RegionalWiseQuantity;
  selling_price: SellingPrice;
}

interface OrderSampleImage {
  id: number;
  dirs: string[];
  name: string;
  extension: string;
  organisation: string;
}

interface Suppliers {
  id: string;
  name: string;
  type: string;
  email: string;
  value: string;
  address: string;
  currency: string;
  initials: string;
  phone_no: string;
}

type SuppliersCollection = {
  [key: string]: Suppliers;
};

interface Client {
  id: string;
  name: string;
  type: string;
  email: string;
  address: string;
  initials: string;
  phone_no: string;
}

interface Tech {
  id: number;
  dirs: string[];
  name: string;
  extension: string;
  organisation: string;
}

interface BuyerQuote {
  value: string;
  currency: string;
}

interface DesignTeam {
  id: string;
  name: string;
  type: string;
  email: string;
  address: string;
  initials: string;
  phone_no: string;
}

interface Attachment {
  sample_image?: SampleImage;
  spec_sheet?: SampleImage;
  trims_file?: SampleImage;
  tech_pack?: SampleImage;
}

interface SampleImage {
  filename: string;
  content_type: string;
  url: string;
  preview_url: string;
}

interface PackingRatio {
  [key: string]: {
    key: string;
    value: string;
  };
}

export interface WorkflowState {
  phase: string;
  stage: string;
  state: string;
  externals: any[];
  approval_state: string;
  allowed_actions: string[];
  has_been_reviewed: boolean;
  allowed_transitions: AllowedTransition[];
  completed_milestones: string[];
}

interface AllowedTransition {
  to: string;
  from: string;
}

export interface Meta {
  allowed_actions: string[];
  active_revisions: any[];
  completed_phases: string[];
  completed_actions: string[];
}

interface Milestone {
  id: number;
  title: string;
  description: string;
  status: string;
  expected_completion_date: string;
  completion_date: string | null;
  duration: string;
  key: string;
  revision: any;
}

export interface Fields {
  attn: string;
  title: string;
  mobile: string;
  assignee: Assignee;
  merchant: Merchant;
  supplier: Supplier;
  enquiries: number[];
  description: string;
  loading_port: Loading;
  contract_date: string;
  delivery_date: string;
  shipment_mode: Loading;
  origin_country: Loading;
}

interface Assignee {
  id: number | string;
  name: string;
  email: string;
}

interface Merchant {
  id: number;
  name: string;
  email: string;
  phone_no?: string;
  initials: string;
  address?: string;
  type: string;
  image: {
    filename: string;
    content_type: string;
    url: string;
    preview_url: string;
  };
}

interface Supplier {
  id: number;
  name: string;
  email: string;
  phone_no?: string;
  initials: string;
  address?: string;
  type: string;
}

interface Loading {
  id: string;
  label: string;
  value: {
    id: number;
    label: string;
    order: number;
    value: string;
  };
}

export interface ListQueryParams {
  supplier_id_eq?: string;
  assignee_id_in?: string;
  contract_id_matches?: string;
  page?: number;
  perPage?: number;
  account: Account['slug'];
}

export type ListQueryResponse = {
  records: PurchaseContract[];
  pagination: Pagination;
};

export type PurchaseConfig = {
  fields: Field[];
  actions: Action[];
  workflow: Workflow;
  relations: Record<string, never>;
  id: string;
  name: string;
  description: string;
};

type Field = {
  name: string;
  label: string;
  type: string;
  required: boolean;
  immutable: boolean;
  phase_locked: boolean;
  select?: SelectConfig;
};

type SelectConfig = {
  key: string;
  module: string;
  type: string;
  label_key?: string;
  value_type?: string;
};

type Action = {
  name: string;
  role: string;
  event: boolean;
  fields: FieldAction[];
  depends_on: string[];
};

type FieldAction = {
  name: string;
  required: boolean;
};

type Workflow = {
  id: string;
  phases: Phase[];
  transitions: Transition[];
  beginning: string;
  conclusion: string;
};

type Phase = {
  id: string;
  name: string;
  stages: Stage[];
  transitions: Transition[];
  beginning: string;
  conclusion: string;
};

type Stage = {
  id: string;
  name: string;
  action: string;
  phase: string;
  approval: boolean;
};

type Transition = {
  from: string;
  to: string;
};
