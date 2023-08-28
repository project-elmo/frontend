export type PreTrainedModel = {
  pm_no: number;
  name: string;
  description: string;
  version: string;
  base_model: string;
  is_downloaded: false; // TODO: 임시값
};

export type ModelDownloadProgress = {
  task: string;
  model_name: string;
  total: string;
  curr_size: string;
  curr_percent: number;
  start_time: string;
  end_time: string;
  sec_per_dl: string;
};

export type FineTunedModel = {
  fm_no: number;
  user_no: number;
  pm_no: number;
  fm_name: string;
  fm_description: string;
};

export type TrainingSession = {
  session_no: string;
  fm_no: number;
  parent_session_no: string;
  start_time: string;
  end_time: string;
  ts_model_name: string;
};
