export type PreTrainedModel = {
  pm_no: number;
  name: string;
  description: string;
  version: string;
  base_model: string;
  is_downloaded: boolean;
};

export type SocketProgress = {
  task: string;
  model_name: string;
  total: string;
  curr_size: string;
  curr_percent: number;
  start_time: string;
  end_time: string;
  sec_per_dl: string;
};

export type TrainingResult = {
  task: string;
  model_name: string;
  train_runtime: number;
  train_samples_per_second: number;
  train_steps_per_second: number;
  train_loss: number;
  epoch: number;
};

export type FineTunedModel = {
  fm_no: number;
  fm_name: string;
  user_no: number;
  pm_no: number;
  pm_name: string;
  fm_description: string;
};

export type TrainingSession = {
  session_no: string;
  fm_no: number;
  fm_name: string;
  pm_no: number;
  pm_name: string;
  parent_session_no: string;
  start_time: string;
  end_time: string;
  ts_model_name: string;
};
export interface Parameter {
  epochs: number;
  save_strategy: string;
  logging_strategy: string;
  evaluation_strategy: string;
  learning_rate: number;
  weight_decay: number;
  batch_size: number;
  eval_steps: number;
  save_steps: number;
  save_total_limits: number;
  run_on_gpu: boolean;
  load_best_at_the_end: boolean;
}

export interface TrainingParameter extends Parameter {
  parameter_no: number;
  session_no: number;
  fm_no: number;
  model_name: string;
  dataset: string;
}

export type Dataset = {
  file_path: string;
  size: number;
  filename: string;
  extension: string;
};

export interface TrainingForm extends Parameter {
  pm_no: number | null;
  pm_name: string;
  fm_no?: number;
  fm_name: string;
  parent_session_no?: string;
  ts_model_name: string;
  dataset: string;
  task: number;
}
