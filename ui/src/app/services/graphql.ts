import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _int4: any;
  geography: any;
  geometry: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_int4". All fields are combined with logical 'AND'. */
export type _Int4_Comparison_Exp = {
  _eq?: Maybe<Scalars['_int4']>;
  _gt?: Maybe<Scalars['_int4']>;
  _gte?: Maybe<Scalars['_int4']>;
  _in?: Maybe<Array<Scalars['_int4']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_int4']>;
  _lte?: Maybe<Scalars['_int4']>;
  _neq?: Maybe<Scalars['_int4']>;
  _nin?: Maybe<Array<Scalars['_int4']>>;
};

/** columns and relationships of "admin_levels" */
export type Admin_Levels = {
  __typename?: 'admin_levels';
  greater_admin_level_id: Scalars['Int'];
  greater_admin_level_name: Scalars['String'];
  last_update?: Maybe<Scalars['timestamptz']>;
  lines_ids: Scalars['String'];
  lower_admin_level_id: Scalars['Int'];
  lower_admin_level_name: Scalars['String'];
  shape: Scalars['geometry'];
  streets_ids: Scalars['String'];
};

/** aggregated selection of "admin_levels" */
export type Admin_Levels_Aggregate = {
  __typename?: 'admin_levels_aggregate';
  aggregate?: Maybe<Admin_Levels_Aggregate_Fields>;
  nodes: Array<Admin_Levels>;
};

/** aggregate fields of "admin_levels" */
export type Admin_Levels_Aggregate_Fields = {
  __typename?: 'admin_levels_aggregate_fields';
  avg?: Maybe<Admin_Levels_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Admin_Levels_Max_Fields>;
  min?: Maybe<Admin_Levels_Min_Fields>;
  stddev?: Maybe<Admin_Levels_Stddev_Fields>;
  stddev_pop?: Maybe<Admin_Levels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Admin_Levels_Stddev_Samp_Fields>;
  sum?: Maybe<Admin_Levels_Sum_Fields>;
  var_pop?: Maybe<Admin_Levels_Var_Pop_Fields>;
  var_samp?: Maybe<Admin_Levels_Var_Samp_Fields>;
  variance?: Maybe<Admin_Levels_Variance_Fields>;
};


/** aggregate fields of "admin_levels" */
export type Admin_Levels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Admin_Levels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Admin_Levels_Avg_Fields = {
  __typename?: 'admin_levels_avg_fields';
  greater_admin_level_id?: Maybe<Scalars['Float']>;
  lower_admin_level_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "admin_levels". All fields are combined with a logical 'AND'. */
export type Admin_Levels_Bool_Exp = {
  _and?: Maybe<Array<Admin_Levels_Bool_Exp>>;
  _not?: Maybe<Admin_Levels_Bool_Exp>;
  _or?: Maybe<Array<Admin_Levels_Bool_Exp>>;
  greater_admin_level_id?: Maybe<Int_Comparison_Exp>;
  greater_admin_level_name?: Maybe<String_Comparison_Exp>;
  last_update?: Maybe<Timestamptz_Comparison_Exp>;
  lines_ids?: Maybe<String_Comparison_Exp>;
  lower_admin_level_id?: Maybe<Int_Comparison_Exp>;
  lower_admin_level_name?: Maybe<String_Comparison_Exp>;
  shape?: Maybe<Geometry_Comparison_Exp>;
  streets_ids?: Maybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "admin_levels" */
export type Admin_Levels_Inc_Input = {
  greater_admin_level_id?: Maybe<Scalars['Int']>;
  lower_admin_level_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "admin_levels" */
export type Admin_Levels_Insert_Input = {
  greater_admin_level_id?: Maybe<Scalars['Int']>;
  greater_admin_level_name?: Maybe<Scalars['String']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  lines_ids?: Maybe<Scalars['String']>;
  lower_admin_level_id?: Maybe<Scalars['Int']>;
  lower_admin_level_name?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['geometry']>;
  streets_ids?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admin_Levels_Max_Fields = {
  __typename?: 'admin_levels_max_fields';
  greater_admin_level_id?: Maybe<Scalars['Int']>;
  greater_admin_level_name?: Maybe<Scalars['String']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  lines_ids?: Maybe<Scalars['String']>;
  lower_admin_level_id?: Maybe<Scalars['Int']>;
  lower_admin_level_name?: Maybe<Scalars['String']>;
  streets_ids?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Levels_Min_Fields = {
  __typename?: 'admin_levels_min_fields';
  greater_admin_level_id?: Maybe<Scalars['Int']>;
  greater_admin_level_name?: Maybe<Scalars['String']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  lines_ids?: Maybe<Scalars['String']>;
  lower_admin_level_id?: Maybe<Scalars['Int']>;
  lower_admin_level_name?: Maybe<Scalars['String']>;
  streets_ids?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin_levels" */
export type Admin_Levels_Mutation_Response = {
  __typename?: 'admin_levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin_Levels>;
};

/** Ordering options when selecting data from "admin_levels". */
export type Admin_Levels_Order_By = {
  greater_admin_level_id?: Maybe<Order_By>;
  greater_admin_level_name?: Maybe<Order_By>;
  last_update?: Maybe<Order_By>;
  lines_ids?: Maybe<Order_By>;
  lower_admin_level_id?: Maybe<Order_By>;
  lower_admin_level_name?: Maybe<Order_By>;
  shape?: Maybe<Order_By>;
  streets_ids?: Maybe<Order_By>;
};

/** select columns of table "admin_levels" */
export enum Admin_Levels_Select_Column {
  /** column name */
  GreaterAdminLevelId = 'greater_admin_level_id',
  /** column name */
  GreaterAdminLevelName = 'greater_admin_level_name',
  /** column name */
  LastUpdate = 'last_update',
  /** column name */
  LinesIds = 'lines_ids',
  /** column name */
  LowerAdminLevelId = 'lower_admin_level_id',
  /** column name */
  LowerAdminLevelName = 'lower_admin_level_name',
  /** column name */
  Shape = 'shape',
  /** column name */
  StreetsIds = 'streets_ids'
}

/** input type for updating data in table "admin_levels" */
export type Admin_Levels_Set_Input = {
  greater_admin_level_id?: Maybe<Scalars['Int']>;
  greater_admin_level_name?: Maybe<Scalars['String']>;
  last_update?: Maybe<Scalars['timestamptz']>;
  lines_ids?: Maybe<Scalars['String']>;
  lower_admin_level_id?: Maybe<Scalars['Int']>;
  lower_admin_level_name?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['geometry']>;
  streets_ids?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Admin_Levels_Stddev_Fields = {
  __typename?: 'admin_levels_stddev_fields';
  greater_admin_level_id?: Maybe<Scalars['Float']>;
  lower_admin_level_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Admin_Levels_Stddev_Pop_Fields = {
  __typename?: 'admin_levels_stddev_pop_fields';
  greater_admin_level_id?: Maybe<Scalars['Float']>;
  lower_admin_level_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Admin_Levels_Stddev_Samp_Fields = {
  __typename?: 'admin_levels_stddev_samp_fields';
  greater_admin_level_id?: Maybe<Scalars['Float']>;
  lower_admin_level_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Admin_Levels_Sum_Fields = {
  __typename?: 'admin_levels_sum_fields';
  greater_admin_level_id?: Maybe<Scalars['Int']>;
  lower_admin_level_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Admin_Levels_Var_Pop_Fields = {
  __typename?: 'admin_levels_var_pop_fields';
  greater_admin_level_id?: Maybe<Scalars['Float']>;
  lower_admin_level_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Admin_Levels_Var_Samp_Fields = {
  __typename?: 'admin_levels_var_samp_fields';
  greater_admin_level_id?: Maybe<Scalars['Float']>;
  lower_admin_level_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Admin_Levels_Variance_Fields = {
  __typename?: 'admin_levels_variance_fields';
  greater_admin_level_id?: Maybe<Scalars['Float']>;
  lower_admin_level_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "comparativo_type" */
export type Comparativo_Type = {
  __typename?: 'comparativo_type';
  month: Scalars['Int'];
  val: Scalars['Float'];
  year: Scalars['Int'];
};

/** aggregated selection of "comparativo_type" */
export type Comparativo_Type_Aggregate = {
  __typename?: 'comparativo_type_aggregate';
  aggregate?: Maybe<Comparativo_Type_Aggregate_Fields>;
  nodes: Array<Comparativo_Type>;
};

/** aggregate fields of "comparativo_type" */
export type Comparativo_Type_Aggregate_Fields = {
  __typename?: 'comparativo_type_aggregate_fields';
  avg?: Maybe<Comparativo_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Comparativo_Type_Max_Fields>;
  min?: Maybe<Comparativo_Type_Min_Fields>;
  stddev?: Maybe<Comparativo_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Comparativo_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comparativo_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Comparativo_Type_Sum_Fields>;
  var_pop?: Maybe<Comparativo_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Comparativo_Type_Var_Samp_Fields>;
  variance?: Maybe<Comparativo_Type_Variance_Fields>;
};


/** aggregate fields of "comparativo_type" */
export type Comparativo_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comparativo_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Comparativo_Type_Avg_Fields = {
  __typename?: 'comparativo_type_avg_fields';
  month?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "comparativo_type". All fields are combined with a logical 'AND'. */
export type Comparativo_Type_Bool_Exp = {
  _and?: Maybe<Array<Comparativo_Type_Bool_Exp>>;
  _not?: Maybe<Comparativo_Type_Bool_Exp>;
  _or?: Maybe<Array<Comparativo_Type_Bool_Exp>>;
  month?: Maybe<Int_Comparison_Exp>;
  val?: Maybe<Float_Comparison_Exp>;
  year?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "comparativo_type" */
export type Comparativo_Type_Inc_Input = {
  month?: Maybe<Scalars['Int']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comparativo_type" */
export type Comparativo_Type_Insert_Input = {
  month?: Maybe<Scalars['Int']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Comparativo_Type_Max_Fields = {
  __typename?: 'comparativo_type_max_fields';
  month?: Maybe<Scalars['Int']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Comparativo_Type_Min_Fields = {
  __typename?: 'comparativo_type_min_fields';
  month?: Maybe<Scalars['Int']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "comparativo_type" */
export type Comparativo_Type_Mutation_Response = {
  __typename?: 'comparativo_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comparativo_Type>;
};

/** Ordering options when selecting data from "comparativo_type". */
export type Comparativo_Type_Order_By = {
  month?: Maybe<Order_By>;
  val?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** select columns of table "comparativo_type" */
export enum Comparativo_Type_Select_Column {
  /** column name */
  Month = 'month',
  /** column name */
  Val = 'val',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "comparativo_type" */
export type Comparativo_Type_Set_Input = {
  month?: Maybe<Scalars['Int']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Comparativo_Type_Stddev_Fields = {
  __typename?: 'comparativo_type_stddev_fields';
  month?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Comparativo_Type_Stddev_Pop_Fields = {
  __typename?: 'comparativo_type_stddev_pop_fields';
  month?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Comparativo_Type_Stddev_Samp_Fields = {
  __typename?: 'comparativo_type_stddev_samp_fields';
  month?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Comparativo_Type_Sum_Fields = {
  __typename?: 'comparativo_type_sum_fields';
  month?: Maybe<Scalars['Int']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Comparativo_Type_Var_Pop_Fields = {
  __typename?: 'comparativo_type_var_pop_fields';
  month?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Comparativo_Type_Var_Samp_Fields = {
  __typename?: 'comparativo_type_var_samp_fields';
  month?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Comparativo_Type_Variance_Fields = {
  __typename?: 'comparativo_type_variance_fields';
  month?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "evolutivo_type" */
export type Evolutivo_Type = {
  __typename?: 'evolutivo_type';
  index: Scalars['String'];
  val: Scalars['Float'];
};

/** aggregated selection of "evolutivo_type" */
export type Evolutivo_Type_Aggregate = {
  __typename?: 'evolutivo_type_aggregate';
  aggregate?: Maybe<Evolutivo_Type_Aggregate_Fields>;
  nodes: Array<Evolutivo_Type>;
};

/** aggregate fields of "evolutivo_type" */
export type Evolutivo_Type_Aggregate_Fields = {
  __typename?: 'evolutivo_type_aggregate_fields';
  avg?: Maybe<Evolutivo_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Evolutivo_Type_Max_Fields>;
  min?: Maybe<Evolutivo_Type_Min_Fields>;
  stddev?: Maybe<Evolutivo_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Evolutivo_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Evolutivo_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Evolutivo_Type_Sum_Fields>;
  var_pop?: Maybe<Evolutivo_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Evolutivo_Type_Var_Samp_Fields>;
  variance?: Maybe<Evolutivo_Type_Variance_Fields>;
};


/** aggregate fields of "evolutivo_type" */
export type Evolutivo_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Evolutivo_Type_Avg_Fields = {
  __typename?: 'evolutivo_type_avg_fields';
  val?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "evolutivo_type". All fields are combined with a logical 'AND'. */
export type Evolutivo_Type_Bool_Exp = {
  _and?: Maybe<Array<Evolutivo_Type_Bool_Exp>>;
  _not?: Maybe<Evolutivo_Type_Bool_Exp>;
  _or?: Maybe<Array<Evolutivo_Type_Bool_Exp>>;
  index?: Maybe<String_Comparison_Exp>;
  val?: Maybe<Float_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "evolutivo_type" */
export type Evolutivo_Type_Inc_Input = {
  val?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "evolutivo_type" */
export type Evolutivo_Type_Insert_Input = {
  index?: Maybe<Scalars['String']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Evolutivo_Type_Max_Fields = {
  __typename?: 'evolutivo_type_max_fields';
  index?: Maybe<Scalars['String']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Evolutivo_Type_Min_Fields = {
  __typename?: 'evolutivo_type_min_fields';
  index?: Maybe<Scalars['String']>;
  val?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "evolutivo_type" */
export type Evolutivo_Type_Mutation_Response = {
  __typename?: 'evolutivo_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Evolutivo_Type>;
};

/** Ordering options when selecting data from "evolutivo_type". */
export type Evolutivo_Type_Order_By = {
  index?: Maybe<Order_By>;
  val?: Maybe<Order_By>;
};

/** select columns of table "evolutivo_type" */
export enum Evolutivo_Type_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  Val = 'val'
}

/** input type for updating data in table "evolutivo_type" */
export type Evolutivo_Type_Set_Input = {
  index?: Maybe<Scalars['String']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Evolutivo_Type_Stddev_Fields = {
  __typename?: 'evolutivo_type_stddev_fields';
  val?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Evolutivo_Type_Stddev_Pop_Fields = {
  __typename?: 'evolutivo_type_stddev_pop_fields';
  val?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Evolutivo_Type_Stddev_Samp_Fields = {
  __typename?: 'evolutivo_type_stddev_samp_fields';
  val?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Evolutivo_Type_Sum_Fields = {
  __typename?: 'evolutivo_type_sum_fields';
  val?: Maybe<Scalars['Float']>;
};

/** aggregate var_pop on columns */
export type Evolutivo_Type_Var_Pop_Fields = {
  __typename?: 'evolutivo_type_var_pop_fields';
  val?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Evolutivo_Type_Var_Samp_Fields = {
  __typename?: 'evolutivo_type_var_samp_fields';
  val?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Evolutivo_Type_Variance_Fields = {
  __typename?: 'evolutivo_type_variance_fields';
  val?: Maybe<Scalars['Float']>;
};

export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};

export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: Maybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: Maybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

export type Get_Comparativo_Args = {
  agg_func?: Maybe<Scalars['String']>;
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  metric?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
};

export type Get_Evolutivo_Args = {
  agg_func?: Maybe<Scalars['String']>;
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  metric?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
};

export type Get_Jams_Lines_Args = {
  agg_func?: Maybe<Scalars['String']>;
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  working_days?: Maybe<Scalars['_int4']>;
};

export type Get_Lines_Args = {
  polygon?: Maybe<Scalars['String']>;
};

export type Get_Predictivo_Args = {
  agg_func?: Maybe<Scalars['String']>;
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  metric?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
};

export type Get_Summary_Args = {
  agg_func?: Maybe<Scalars['String']>;
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  working_days?: Maybe<Scalars['_int4']>;
};

/** columns and relationships of "histogram_type" */
export type Histogram_Type = {
  __typename?: 'histogram_type';
  duration: Scalars['Float'];
  index?: Maybe<Scalars['timestamp']>;
  keep?: Maybe<Scalars['Boolean']>;
  val: Scalars['Float'];
};

/** aggregated selection of "histogram_type" */
export type Histogram_Type_Aggregate = {
  __typename?: 'histogram_type_aggregate';
  aggregate?: Maybe<Histogram_Type_Aggregate_Fields>;
  nodes: Array<Histogram_Type>;
};

/** aggregate fields of "histogram_type" */
export type Histogram_Type_Aggregate_Fields = {
  __typename?: 'histogram_type_aggregate_fields';
  avg?: Maybe<Histogram_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Histogram_Type_Max_Fields>;
  min?: Maybe<Histogram_Type_Min_Fields>;
  stddev?: Maybe<Histogram_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Histogram_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Histogram_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Histogram_Type_Sum_Fields>;
  var_pop?: Maybe<Histogram_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Histogram_Type_Var_Samp_Fields>;
  variance?: Maybe<Histogram_Type_Variance_Fields>;
};


/** aggregate fields of "histogram_type" */
export type Histogram_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Histogram_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Histogram_Type_Avg_Fields = {
  __typename?: 'histogram_type_avg_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "histogram_type". All fields are combined with a logical 'AND'. */
export type Histogram_Type_Bool_Exp = {
  _and?: Maybe<Array<Histogram_Type_Bool_Exp>>;
  _not?: Maybe<Histogram_Type_Bool_Exp>;
  _or?: Maybe<Array<Histogram_Type_Bool_Exp>>;
  duration?: Maybe<Float_Comparison_Exp>;
  index?: Maybe<Timestamp_Comparison_Exp>;
  keep?: Maybe<Boolean_Comparison_Exp>;
  val?: Maybe<Float_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "histogram_type" */
export type Histogram_Type_Inc_Input = {
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "histogram_type" */
export type Histogram_Type_Insert_Input = {
  duration?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['timestamp']>;
  keep?: Maybe<Scalars['Boolean']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Histogram_Type_Max_Fields = {
  __typename?: 'histogram_type_max_fields';
  duration?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['timestamp']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Histogram_Type_Min_Fields = {
  __typename?: 'histogram_type_min_fields';
  duration?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['timestamp']>;
  val?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "histogram_type" */
export type Histogram_Type_Mutation_Response = {
  __typename?: 'histogram_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Histogram_Type>;
};

/** Ordering options when selecting data from "histogram_type". */
export type Histogram_Type_Order_By = {
  duration?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  keep?: Maybe<Order_By>;
  val?: Maybe<Order_By>;
};

/** select columns of table "histogram_type" */
export enum Histogram_Type_Select_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Index = 'index',
  /** column name */
  Keep = 'keep',
  /** column name */
  Val = 'val'
}

/** input type for updating data in table "histogram_type" */
export type Histogram_Type_Set_Input = {
  duration?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['timestamp']>;
  keep?: Maybe<Scalars['Boolean']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Histogram_Type_Stddev_Fields = {
  __typename?: 'histogram_type_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Histogram_Type_Stddev_Pop_Fields = {
  __typename?: 'histogram_type_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Histogram_Type_Stddev_Samp_Fields = {
  __typename?: 'histogram_type_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Histogram_Type_Sum_Fields = {
  __typename?: 'histogram_type_sum_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate var_pop on columns */
export type Histogram_Type_Var_Pop_Fields = {
  __typename?: 'histogram_type_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Histogram_Type_Var_Samp_Fields = {
  __typename?: 'histogram_type_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Histogram_Type_Variance_Fields = {
  __typename?: 'histogram_type_variance_fields';
  duration?: Maybe<Scalars['Float']>;
  val?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "jam_lines" */
export type Jam_Lines = {
  __typename?: 'jam_lines';
  last_update?: Maybe<Scalars['timestamptz']>;
  line?: Maybe<Scalars['geometry']>;
  line_id: Scalars['Int'];
  street_id: Scalars['Int'];
};

/** aggregated selection of "jam_lines" */
export type Jam_Lines_Aggregate = {
  __typename?: 'jam_lines_aggregate';
  aggregate?: Maybe<Jam_Lines_Aggregate_Fields>;
  nodes: Array<Jam_Lines>;
};

/** aggregate fields of "jam_lines" */
export type Jam_Lines_Aggregate_Fields = {
  __typename?: 'jam_lines_aggregate_fields';
  avg?: Maybe<Jam_Lines_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jam_Lines_Max_Fields>;
  min?: Maybe<Jam_Lines_Min_Fields>;
  stddev?: Maybe<Jam_Lines_Stddev_Fields>;
  stddev_pop?: Maybe<Jam_Lines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jam_Lines_Stddev_Samp_Fields>;
  sum?: Maybe<Jam_Lines_Sum_Fields>;
  var_pop?: Maybe<Jam_Lines_Var_Pop_Fields>;
  var_samp?: Maybe<Jam_Lines_Var_Samp_Fields>;
  variance?: Maybe<Jam_Lines_Variance_Fields>;
};


/** aggregate fields of "jam_lines" */
export type Jam_Lines_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Jam_Lines_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Jam_Lines_Avg_Fields = {
  __typename?: 'jam_lines_avg_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "jam_lines". All fields are combined with a logical 'AND'. */
export type Jam_Lines_Bool_Exp = {
  _and?: Maybe<Array<Jam_Lines_Bool_Exp>>;
  _not?: Maybe<Jam_Lines_Bool_Exp>;
  _or?: Maybe<Array<Jam_Lines_Bool_Exp>>;
  last_update?: Maybe<Timestamptz_Comparison_Exp>;
  line?: Maybe<Geometry_Comparison_Exp>;
  line_id?: Maybe<Int_Comparison_Exp>;
  street_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "jam_lines" */
export enum Jam_Lines_Constraint {
  /** unique or primary key constraint */
  JamLinesLineKey = 'jam_lines_line_key',
  /** unique or primary key constraint */
  JamLinesPkey = 'jam_lines_pkey'
}

/** input type for incrementing numeric columns in table "jam_lines" */
export type Jam_Lines_Inc_Input = {
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "jam_lines" */
export type Jam_Lines_Insert_Input = {
  last_update?: Maybe<Scalars['timestamptz']>;
  line?: Maybe<Scalars['geometry']>;
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Jam_Lines_Max_Fields = {
  __typename?: 'jam_lines_max_fields';
  last_update?: Maybe<Scalars['timestamptz']>;
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Jam_Lines_Min_Fields = {
  __typename?: 'jam_lines_min_fields';
  last_update?: Maybe<Scalars['timestamptz']>;
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "jam_lines" */
export type Jam_Lines_Mutation_Response = {
  __typename?: 'jam_lines_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jam_Lines>;
};

/** on conflict condition type for table "jam_lines" */
export type Jam_Lines_On_Conflict = {
  constraint: Jam_Lines_Constraint;
  update_columns?: Array<Jam_Lines_Update_Column>;
  where?: Maybe<Jam_Lines_Bool_Exp>;
};

/** Ordering options when selecting data from "jam_lines". */
export type Jam_Lines_Order_By = {
  last_update?: Maybe<Order_By>;
  line?: Maybe<Order_By>;
  line_id?: Maybe<Order_By>;
  street_id?: Maybe<Order_By>;
};

/** primary key columns input for table: jam_lines */
export type Jam_Lines_Pk_Columns_Input = {
  line_id: Scalars['Int'];
};

/** select columns of table "jam_lines" */
export enum Jam_Lines_Select_Column {
  /** column name */
  LastUpdate = 'last_update',
  /** column name */
  Line = 'line',
  /** column name */
  LineId = 'line_id',
  /** column name */
  StreetId = 'street_id'
}

/** input type for updating data in table "jam_lines" */
export type Jam_Lines_Set_Input = {
  last_update?: Maybe<Scalars['timestamptz']>;
  line?: Maybe<Scalars['geometry']>;
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Jam_Lines_Stddev_Fields = {
  __typename?: 'jam_lines_stddev_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Jam_Lines_Stddev_Pop_Fields = {
  __typename?: 'jam_lines_stddev_pop_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Jam_Lines_Stddev_Samp_Fields = {
  __typename?: 'jam_lines_stddev_samp_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Jam_Lines_Sum_Fields = {
  __typename?: 'jam_lines_sum_fields';
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "jam_lines" */
export enum Jam_Lines_Update_Column {
  /** column name */
  LastUpdate = 'last_update',
  /** column name */
  Line = 'line',
  /** column name */
  LineId = 'line_id',
  /** column name */
  StreetId = 'street_id'
}

/** aggregate var_pop on columns */
export type Jam_Lines_Var_Pop_Fields = {
  __typename?: 'jam_lines_var_pop_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Jam_Lines_Var_Samp_Fields = {
  __typename?: 'jam_lines_var_samp_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Jam_Lines_Variance_Fields = {
  __typename?: 'jam_lines_variance_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "jams" */
export type Jams = {
  __typename?: 'jams';
  delay: Scalars['Float'];
  end_timestamp: Scalars['timestamp'];
  hour: Scalars['_int4'];
  is_working_day: Scalars['Int'];
  length: Scalars['Float'];
  level: Scalars['Int'];
  line_id: Scalars['Int'];
  speed: Scalars['Float'];
  start_timestamp: Scalars['timestamp'];
  uuid: Scalars['Int'];
};

/** columns and relationships of "jams_agg_line" */
export type Jams_Agg_Line = {
  __typename?: 'jams_agg_line';
  level: Scalars['Int'];
  line_id: Scalars['Int'];
};

/** aggregated selection of "jams_agg_line" */
export type Jams_Agg_Line_Aggregate = {
  __typename?: 'jams_agg_line_aggregate';
  aggregate?: Maybe<Jams_Agg_Line_Aggregate_Fields>;
  nodes: Array<Jams_Agg_Line>;
};

/** aggregate fields of "jams_agg_line" */
export type Jams_Agg_Line_Aggregate_Fields = {
  __typename?: 'jams_agg_line_aggregate_fields';
  avg?: Maybe<Jams_Agg_Line_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jams_Agg_Line_Max_Fields>;
  min?: Maybe<Jams_Agg_Line_Min_Fields>;
  stddev?: Maybe<Jams_Agg_Line_Stddev_Fields>;
  stddev_pop?: Maybe<Jams_Agg_Line_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jams_Agg_Line_Stddev_Samp_Fields>;
  sum?: Maybe<Jams_Agg_Line_Sum_Fields>;
  var_pop?: Maybe<Jams_Agg_Line_Var_Pop_Fields>;
  var_samp?: Maybe<Jams_Agg_Line_Var_Samp_Fields>;
  variance?: Maybe<Jams_Agg_Line_Variance_Fields>;
};


/** aggregate fields of "jams_agg_line" */
export type Jams_Agg_Line_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Jams_Agg_Line_Avg_Fields = {
  __typename?: 'jams_agg_line_avg_fields';
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "jams_agg_line". All fields are combined with a logical 'AND'. */
export type Jams_Agg_Line_Bool_Exp = {
  _and?: Maybe<Array<Jams_Agg_Line_Bool_Exp>>;
  _not?: Maybe<Jams_Agg_Line_Bool_Exp>;
  _or?: Maybe<Array<Jams_Agg_Line_Bool_Exp>>;
  level?: Maybe<Int_Comparison_Exp>;
  line_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "jams_agg_line" */
export type Jams_Agg_Line_Inc_Input = {
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "jams_agg_line" */
export type Jams_Agg_Line_Insert_Input = {
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Jams_Agg_Line_Max_Fields = {
  __typename?: 'jams_agg_line_max_fields';
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Jams_Agg_Line_Min_Fields = {
  __typename?: 'jams_agg_line_min_fields';
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "jams_agg_line" */
export type Jams_Agg_Line_Mutation_Response = {
  __typename?: 'jams_agg_line_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jams_Agg_Line>;
};

/** Ordering options when selecting data from "jams_agg_line". */
export type Jams_Agg_Line_Order_By = {
  level?: Maybe<Order_By>;
  line_id?: Maybe<Order_By>;
};

/** select columns of table "jams_agg_line" */
export enum Jams_Agg_Line_Select_Column {
  /** column name */
  Level = 'level',
  /** column name */
  LineId = 'line_id'
}

/** input type for updating data in table "jams_agg_line" */
export type Jams_Agg_Line_Set_Input = {
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Jams_Agg_Line_Stddev_Fields = {
  __typename?: 'jams_agg_line_stddev_fields';
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Jams_Agg_Line_Stddev_Pop_Fields = {
  __typename?: 'jams_agg_line_stddev_pop_fields';
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Jams_Agg_Line_Stddev_Samp_Fields = {
  __typename?: 'jams_agg_line_stddev_samp_fields';
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Jams_Agg_Line_Sum_Fields = {
  __typename?: 'jams_agg_line_sum_fields';
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Jams_Agg_Line_Var_Pop_Fields = {
  __typename?: 'jams_agg_line_var_pop_fields';
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Jams_Agg_Line_Var_Samp_Fields = {
  __typename?: 'jams_agg_line_var_samp_fields';
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Jams_Agg_Line_Variance_Fields = {
  __typename?: 'jams_agg_line_variance_fields';
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "jams" */
export type Jams_Aggregate = {
  __typename?: 'jams_aggregate';
  aggregate?: Maybe<Jams_Aggregate_Fields>;
  nodes: Array<Jams>;
};

/** aggregate fields of "jams" */
export type Jams_Aggregate_Fields = {
  __typename?: 'jams_aggregate_fields';
  avg?: Maybe<Jams_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jams_Max_Fields>;
  min?: Maybe<Jams_Min_Fields>;
  stddev?: Maybe<Jams_Stddev_Fields>;
  stddev_pop?: Maybe<Jams_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jams_Stddev_Samp_Fields>;
  sum?: Maybe<Jams_Sum_Fields>;
  var_pop?: Maybe<Jams_Var_Pop_Fields>;
  var_samp?: Maybe<Jams_Var_Samp_Fields>;
  variance?: Maybe<Jams_Variance_Fields>;
};


/** aggregate fields of "jams" */
export type Jams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Jams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Jams_Avg_Fields = {
  __typename?: 'jams_avg_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "jams". All fields are combined with a logical 'AND'. */
export type Jams_Bool_Exp = {
  _and?: Maybe<Array<Jams_Bool_Exp>>;
  _not?: Maybe<Jams_Bool_Exp>;
  _or?: Maybe<Array<Jams_Bool_Exp>>;
  delay?: Maybe<Float_Comparison_Exp>;
  end_timestamp?: Maybe<Timestamp_Comparison_Exp>;
  hour?: Maybe<_Int4_Comparison_Exp>;
  is_working_day?: Maybe<Int_Comparison_Exp>;
  length?: Maybe<Float_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  line_id?: Maybe<Int_Comparison_Exp>;
  speed?: Maybe<Float_Comparison_Exp>;
  start_timestamp?: Maybe<Timestamp_Comparison_Exp>;
  uuid?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "jams" */
export enum Jams_Constraint {
  /** unique or primary key constraint */
  JamsPkey = 'jams_pkey'
}

/** input type for incrementing numeric columns in table "jams" */
export type Jams_Inc_Input = {
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "jams" */
export type Jams_Insert_Input = {
  delay?: Maybe<Scalars['Float']>;
  end_timestamp?: Maybe<Scalars['timestamp']>;
  hour?: Maybe<Scalars['_int4']>;
  is_working_day?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
  start_timestamp?: Maybe<Scalars['timestamp']>;
  uuid?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Jams_Max_Fields = {
  __typename?: 'jams_max_fields';
  delay?: Maybe<Scalars['Float']>;
  end_timestamp?: Maybe<Scalars['timestamp']>;
  is_working_day?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
  start_timestamp?: Maybe<Scalars['timestamp']>;
  uuid?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Jams_Min_Fields = {
  __typename?: 'jams_min_fields';
  delay?: Maybe<Scalars['Float']>;
  end_timestamp?: Maybe<Scalars['timestamp']>;
  is_working_day?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
  start_timestamp?: Maybe<Scalars['timestamp']>;
  uuid?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "jams" */
export type Jams_Mutation_Response = {
  __typename?: 'jams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jams>;
};

/** on conflict condition type for table "jams" */
export type Jams_On_Conflict = {
  constraint: Jams_Constraint;
  update_columns?: Array<Jams_Update_Column>;
  where?: Maybe<Jams_Bool_Exp>;
};

/** Ordering options when selecting data from "jams". */
export type Jams_Order_By = {
  delay?: Maybe<Order_By>;
  end_timestamp?: Maybe<Order_By>;
  hour?: Maybe<Order_By>;
  is_working_day?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  line_id?: Maybe<Order_By>;
  speed?: Maybe<Order_By>;
  start_timestamp?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: jams */
export type Jams_Pk_Columns_Input = {
  uuid: Scalars['Int'];
};

/** select columns of table "jams" */
export enum Jams_Select_Column {
  /** column name */
  Delay = 'delay',
  /** column name */
  EndTimestamp = 'end_timestamp',
  /** column name */
  Hour = 'hour',
  /** column name */
  IsWorkingDay = 'is_working_day',
  /** column name */
  Length = 'length',
  /** column name */
  Level = 'level',
  /** column name */
  LineId = 'line_id',
  /** column name */
  Speed = 'speed',
  /** column name */
  StartTimestamp = 'start_timestamp',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "jams" */
export type Jams_Set_Input = {
  delay?: Maybe<Scalars['Float']>;
  end_timestamp?: Maybe<Scalars['timestamp']>;
  hour?: Maybe<Scalars['_int4']>;
  is_working_day?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
  start_timestamp?: Maybe<Scalars['timestamp']>;
  uuid?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Jams_Stddev_Fields = {
  __typename?: 'jams_stddev_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Jams_Stddev_Pop_Fields = {
  __typename?: 'jams_stddev_pop_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Jams_Stddev_Samp_Fields = {
  __typename?: 'jams_stddev_samp_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Jams_Sum_Fields = {
  __typename?: 'jams_sum_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Int']>;
  line_id?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Int']>;
};

/** update columns of table "jams" */
export enum Jams_Update_Column {
  /** column name */
  Delay = 'delay',
  /** column name */
  EndTimestamp = 'end_timestamp',
  /** column name */
  Hour = 'hour',
  /** column name */
  IsWorkingDay = 'is_working_day',
  /** column name */
  Length = 'length',
  /** column name */
  Level = 'level',
  /** column name */
  LineId = 'line_id',
  /** column name */
  Speed = 'speed',
  /** column name */
  StartTimestamp = 'start_timestamp',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Jams_Var_Pop_Fields = {
  __typename?: 'jams_var_pop_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Jams_Var_Samp_Fields = {
  __typename?: 'jams_var_samp_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Jams_Variance_Fields = {
  __typename?: 'jams_variance_fields';
  delay?: Maybe<Scalars['Float']>;
  is_working_day?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  uuid?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "admin_levels" */
  delete_admin_levels?: Maybe<Admin_Levels_Mutation_Response>;
  /** delete data from the table: "comparativo_type" */
  delete_comparativo_type?: Maybe<Comparativo_Type_Mutation_Response>;
  /** delete data from the table: "evolutivo_type" */
  delete_evolutivo_type?: Maybe<Evolutivo_Type_Mutation_Response>;
  /** delete data from the table: "histogram_type" */
  delete_histogram_type?: Maybe<Histogram_Type_Mutation_Response>;
  /** delete data from the table: "jam_lines" */
  delete_jam_lines?: Maybe<Jam_Lines_Mutation_Response>;
  /** delete single row from the table: "jam_lines" */
  delete_jam_lines_by_pk?: Maybe<Jam_Lines>;
  /** delete data from the table: "jams" */
  delete_jams?: Maybe<Jams_Mutation_Response>;
  /** delete data from the table: "jams_agg_line" */
  delete_jams_agg_line?: Maybe<Jams_Agg_Line_Mutation_Response>;
  /** delete single row from the table: "jams" */
  delete_jams_by_pk?: Maybe<Jams>;
  /** delete data from the table: "simple_line_type" */
  delete_simple_line_type?: Maybe<Simple_Line_Type_Mutation_Response>;
  /** delete data from the table: "streets" */
  delete_streets?: Maybe<Streets_Mutation_Response>;
  /** delete single row from the table: "streets" */
  delete_streets_by_pk?: Maybe<Streets>;
  /** insert data into the table: "admin_levels" */
  insert_admin_levels?: Maybe<Admin_Levels_Mutation_Response>;
  /** insert a single row into the table: "admin_levels" */
  insert_admin_levels_one?: Maybe<Admin_Levels>;
  /** insert data into the table: "comparativo_type" */
  insert_comparativo_type?: Maybe<Comparativo_Type_Mutation_Response>;
  /** insert a single row into the table: "comparativo_type" */
  insert_comparativo_type_one?: Maybe<Comparativo_Type>;
  /** insert data into the table: "evolutivo_type" */
  insert_evolutivo_type?: Maybe<Evolutivo_Type_Mutation_Response>;
  /** insert a single row into the table: "evolutivo_type" */
  insert_evolutivo_type_one?: Maybe<Evolutivo_Type>;
  /** insert data into the table: "histogram_type" */
  insert_histogram_type?: Maybe<Histogram_Type_Mutation_Response>;
  /** insert a single row into the table: "histogram_type" */
  insert_histogram_type_one?: Maybe<Histogram_Type>;
  /** insert data into the table: "jam_lines" */
  insert_jam_lines?: Maybe<Jam_Lines_Mutation_Response>;
  /** insert a single row into the table: "jam_lines" */
  insert_jam_lines_one?: Maybe<Jam_Lines>;
  /** insert data into the table: "jams" */
  insert_jams?: Maybe<Jams_Mutation_Response>;
  /** insert data into the table: "jams_agg_line" */
  insert_jams_agg_line?: Maybe<Jams_Agg_Line_Mutation_Response>;
  /** insert a single row into the table: "jams_agg_line" */
  insert_jams_agg_line_one?: Maybe<Jams_Agg_Line>;
  /** insert a single row into the table: "jams" */
  insert_jams_one?: Maybe<Jams>;
  /** insert data into the table: "simple_line_type" */
  insert_simple_line_type?: Maybe<Simple_Line_Type_Mutation_Response>;
  /** insert a single row into the table: "simple_line_type" */
  insert_simple_line_type_one?: Maybe<Simple_Line_Type>;
  /** insert data into the table: "streets" */
  insert_streets?: Maybe<Streets_Mutation_Response>;
  /** insert a single row into the table: "streets" */
  insert_streets_one?: Maybe<Streets>;
  /** update data of the table: "admin_levels" */
  update_admin_levels?: Maybe<Admin_Levels_Mutation_Response>;
  /** update data of the table: "comparativo_type" */
  update_comparativo_type?: Maybe<Comparativo_Type_Mutation_Response>;
  /** update data of the table: "evolutivo_type" */
  update_evolutivo_type?: Maybe<Evolutivo_Type_Mutation_Response>;
  /** update data of the table: "histogram_type" */
  update_histogram_type?: Maybe<Histogram_Type_Mutation_Response>;
  /** update data of the table: "jam_lines" */
  update_jam_lines?: Maybe<Jam_Lines_Mutation_Response>;
  /** update single row of the table: "jam_lines" */
  update_jam_lines_by_pk?: Maybe<Jam_Lines>;
  /** update data of the table: "jams" */
  update_jams?: Maybe<Jams_Mutation_Response>;
  /** update data of the table: "jams_agg_line" */
  update_jams_agg_line?: Maybe<Jams_Agg_Line_Mutation_Response>;
  /** update single row of the table: "jams" */
  update_jams_by_pk?: Maybe<Jams>;
  /** update data of the table: "simple_line_type" */
  update_simple_line_type?: Maybe<Simple_Line_Type_Mutation_Response>;
  /** update data of the table: "streets" */
  update_streets?: Maybe<Streets_Mutation_Response>;
  /** update single row of the table: "streets" */
  update_streets_by_pk?: Maybe<Streets>;
};


/** mutation root */
export type Mutation_RootDelete_Admin_LevelsArgs = {
  where: Admin_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comparativo_TypeArgs = {
  where: Comparativo_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Evolutivo_TypeArgs = {
  where: Evolutivo_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Histogram_TypeArgs = {
  where: Histogram_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jam_LinesArgs = {
  where: Jam_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jam_Lines_By_PkArgs = {
  line_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_JamsArgs = {
  where: Jams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jams_Agg_LineArgs = {
  where: Jams_Agg_Line_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jams_By_PkArgs = {
  uuid: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Simple_Line_TypeArgs = {
  where: Simple_Line_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_StreetsArgs = {
  where: Streets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Streets_By_PkArgs = {
  street_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Admin_LevelsArgs = {
  objects: Array<Admin_Levels_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_Levels_OneArgs = {
  object: Admin_Levels_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Comparativo_TypeArgs = {
  objects: Array<Comparativo_Type_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Comparativo_Type_OneArgs = {
  object: Comparativo_Type_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Evolutivo_TypeArgs = {
  objects: Array<Evolutivo_Type_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Evolutivo_Type_OneArgs = {
  object: Evolutivo_Type_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Histogram_TypeArgs = {
  objects: Array<Histogram_Type_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Histogram_Type_OneArgs = {
  object: Histogram_Type_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Jam_LinesArgs = {
  objects: Array<Jam_Lines_Insert_Input>;
  on_conflict?: Maybe<Jam_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jam_Lines_OneArgs = {
  object: Jam_Lines_Insert_Input;
  on_conflict?: Maybe<Jam_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_JamsArgs = {
  objects: Array<Jams_Insert_Input>;
  on_conflict?: Maybe<Jams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jams_Agg_LineArgs = {
  objects: Array<Jams_Agg_Line_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Jams_Agg_Line_OneArgs = {
  object: Jams_Agg_Line_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Jams_OneArgs = {
  object: Jams_Insert_Input;
  on_conflict?: Maybe<Jams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Simple_Line_TypeArgs = {
  objects: Array<Simple_Line_Type_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Simple_Line_Type_OneArgs = {
  object: Simple_Line_Type_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_StreetsArgs = {
  objects: Array<Streets_Insert_Input>;
  on_conflict?: Maybe<Streets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Streets_OneArgs = {
  object: Streets_Insert_Input;
  on_conflict?: Maybe<Streets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_LevelsArgs = {
  _inc?: Maybe<Admin_Levels_Inc_Input>;
  _set?: Maybe<Admin_Levels_Set_Input>;
  where: Admin_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comparativo_TypeArgs = {
  _inc?: Maybe<Comparativo_Type_Inc_Input>;
  _set?: Maybe<Comparativo_Type_Set_Input>;
  where: Comparativo_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Evolutivo_TypeArgs = {
  _inc?: Maybe<Evolutivo_Type_Inc_Input>;
  _set?: Maybe<Evolutivo_Type_Set_Input>;
  where: Evolutivo_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Histogram_TypeArgs = {
  _inc?: Maybe<Histogram_Type_Inc_Input>;
  _set?: Maybe<Histogram_Type_Set_Input>;
  where: Histogram_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jam_LinesArgs = {
  _inc?: Maybe<Jam_Lines_Inc_Input>;
  _set?: Maybe<Jam_Lines_Set_Input>;
  where: Jam_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jam_Lines_By_PkArgs = {
  _inc?: Maybe<Jam_Lines_Inc_Input>;
  _set?: Maybe<Jam_Lines_Set_Input>;
  pk_columns: Jam_Lines_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_JamsArgs = {
  _inc?: Maybe<Jams_Inc_Input>;
  _set?: Maybe<Jams_Set_Input>;
  where: Jams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jams_Agg_LineArgs = {
  _inc?: Maybe<Jams_Agg_Line_Inc_Input>;
  _set?: Maybe<Jams_Agg_Line_Set_Input>;
  where: Jams_Agg_Line_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jams_By_PkArgs = {
  _inc?: Maybe<Jams_Inc_Input>;
  _set?: Maybe<Jams_Set_Input>;
  pk_columns: Jams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Simple_Line_TypeArgs = {
  _inc?: Maybe<Simple_Line_Type_Inc_Input>;
  _set?: Maybe<Simple_Line_Type_Set_Input>;
  where: Simple_Line_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_StreetsArgs = {
  _inc?: Maybe<Streets_Inc_Input>;
  _set?: Maybe<Streets_Set_Input>;
  where: Streets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Streets_By_PkArgs = {
  _inc?: Maybe<Streets_Inc_Input>;
  _set?: Maybe<Streets_Set_Input>;
  pk_columns: Streets_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin_levels" */
  admin_levels: Array<Admin_Levels>;
  /** fetch aggregated fields from the table: "admin_levels" */
  admin_levels_aggregate: Admin_Levels_Aggregate;
  /** fetch data from the table: "comparativo_type" */
  comparativo_type: Array<Comparativo_Type>;
  /** fetch aggregated fields from the table: "comparativo_type" */
  comparativo_type_aggregate: Comparativo_Type_Aggregate;
  /** fetch data from the table: "evolutivo_type" */
  evolutivo_type: Array<Evolutivo_Type>;
  /** fetch aggregated fields from the table: "evolutivo_type" */
  evolutivo_type_aggregate: Evolutivo_Type_Aggregate;
  /** execute function "get_comparativo" which returns "comparativo_type" */
  get_comparativo: Array<Comparativo_Type>;
  /** execute function "get_comparativo" and query aggregates on result of table type "comparativo_type" */
  get_comparativo_aggregate: Comparativo_Type_Aggregate;
  /** execute function "get_evolutivo" which returns "evolutivo_type" */
  get_evolutivo: Array<Evolutivo_Type>;
  /** execute function "get_evolutivo" and query aggregates on result of table type "evolutivo_type" */
  get_evolutivo_aggregate: Evolutivo_Type_Aggregate;
  /** execute function "get_jams_lines" which returns "jams_agg_line" */
  get_jams_lines: Array<Jams_Agg_Line>;
  /** execute function "get_jams_lines" and query aggregates on result of table type "jams_agg_line" */
  get_jams_lines_aggregate: Jams_Agg_Line_Aggregate;
  /** execute function "get_lines" which returns "simple_line_type" */
  get_lines: Array<Simple_Line_Type>;
  /** execute function "get_lines" and query aggregates on result of table type "simple_line_type" */
  get_lines_aggregate: Simple_Line_Type_Aggregate;
  /** execute function "get_predictivo" which returns "evolutivo_type" */
  get_predictivo: Array<Evolutivo_Type>;
  /** execute function "get_predictivo" and query aggregates on result of table type "evolutivo_type" */
  get_predictivo_aggregate: Evolutivo_Type_Aggregate;
  /** execute function "get_summary" which returns "evolutivo_type" */
  get_summary: Array<Evolutivo_Type>;
  /** execute function "get_summary" and query aggregates on result of table type "evolutivo_type" */
  get_summary_aggregate: Evolutivo_Type_Aggregate;
  /** fetch data from the table: "histogram_type" */
  histogram_type: Array<Histogram_Type>;
  /** fetch aggregated fields from the table: "histogram_type" */
  histogram_type_aggregate: Histogram_Type_Aggregate;
  /** fetch data from the table: "jam_lines" */
  jam_lines: Array<Jam_Lines>;
  /** fetch aggregated fields from the table: "jam_lines" */
  jam_lines_aggregate: Jam_Lines_Aggregate;
  /** fetch data from the table: "jam_lines" using primary key columns */
  jam_lines_by_pk?: Maybe<Jam_Lines>;
  /** fetch data from the table: "jams" */
  jams: Array<Jams>;
  /** fetch data from the table: "jams_agg_line" */
  jams_agg_line: Array<Jams_Agg_Line>;
  /** fetch aggregated fields from the table: "jams_agg_line" */
  jams_agg_line_aggregate: Jams_Agg_Line_Aggregate;
  /** fetch aggregated fields from the table: "jams" */
  jams_aggregate: Jams_Aggregate;
  /** fetch data from the table: "jams" using primary key columns */
  jams_by_pk?: Maybe<Jams>;
  /** fetch data from the table: "simple_line_type" */
  simple_line_type: Array<Simple_Line_Type>;
  /** fetch aggregated fields from the table: "simple_line_type" */
  simple_line_type_aggregate: Simple_Line_Type_Aggregate;
  /** fetch data from the table: "streets" */
  streets: Array<Streets>;
  /** fetch aggregated fields from the table: "streets" */
  streets_aggregate: Streets_Aggregate;
  /** fetch data from the table: "streets" using primary key columns */
  streets_by_pk?: Maybe<Streets>;
};


export type Query_RootAdmin_LevelsArgs = {
  distinct_on?: Maybe<Array<Admin_Levels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admin_Levels_Order_By>>;
  where?: Maybe<Admin_Levels_Bool_Exp>;
};


export type Query_RootAdmin_Levels_AggregateArgs = {
  distinct_on?: Maybe<Array<Admin_Levels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admin_Levels_Order_By>>;
  where?: Maybe<Admin_Levels_Bool_Exp>;
};


export type Query_RootComparativo_TypeArgs = {
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Query_RootComparativo_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Query_RootEvolutivo_TypeArgs = {
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootEvolutivo_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootGet_ComparativoArgs = {
  args: Get_Comparativo_Args;
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Query_RootGet_Comparativo_AggregateArgs = {
  args: Get_Comparativo_Args;
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Query_RootGet_EvolutivoArgs = {
  args: Get_Evolutivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootGet_Evolutivo_AggregateArgs = {
  args: Get_Evolutivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootGet_Jams_LinesArgs = {
  args: Get_Jams_Lines_Args;
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Query_RootGet_Jams_Lines_AggregateArgs = {
  args: Get_Jams_Lines_Args;
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Query_RootGet_LinesArgs = {
  args: Get_Lines_Args;
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Query_RootGet_Lines_AggregateArgs = {
  args: Get_Lines_Args;
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Query_RootGet_PredictivoArgs = {
  args: Get_Predictivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootGet_Predictivo_AggregateArgs = {
  args: Get_Predictivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootGet_SummaryArgs = {
  args: Get_Summary_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootGet_Summary_AggregateArgs = {
  args: Get_Summary_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Query_RootHistogram_TypeArgs = {
  distinct_on?: Maybe<Array<Histogram_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Histogram_Type_Order_By>>;
  where?: Maybe<Histogram_Type_Bool_Exp>;
};


export type Query_RootHistogram_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Histogram_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Histogram_Type_Order_By>>;
  where?: Maybe<Histogram_Type_Bool_Exp>;
};


export type Query_RootJam_LinesArgs = {
  distinct_on?: Maybe<Array<Jam_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jam_Lines_Order_By>>;
  where?: Maybe<Jam_Lines_Bool_Exp>;
};


export type Query_RootJam_Lines_AggregateArgs = {
  distinct_on?: Maybe<Array<Jam_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jam_Lines_Order_By>>;
  where?: Maybe<Jam_Lines_Bool_Exp>;
};


export type Query_RootJam_Lines_By_PkArgs = {
  line_id: Scalars['Int'];
};


export type Query_RootJamsArgs = {
  distinct_on?: Maybe<Array<Jams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Order_By>>;
  where?: Maybe<Jams_Bool_Exp>;
};


export type Query_RootJams_Agg_LineArgs = {
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Query_RootJams_Agg_Line_AggregateArgs = {
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Query_RootJams_AggregateArgs = {
  distinct_on?: Maybe<Array<Jams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Order_By>>;
  where?: Maybe<Jams_Bool_Exp>;
};


export type Query_RootJams_By_PkArgs = {
  uuid: Scalars['Int'];
};


export type Query_RootSimple_Line_TypeArgs = {
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Query_RootSimple_Line_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Query_RootStreetsArgs = {
  distinct_on?: Maybe<Array<Streets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streets_Order_By>>;
  where?: Maybe<Streets_Bool_Exp>;
};


export type Query_RootStreets_AggregateArgs = {
  distinct_on?: Maybe<Array<Streets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streets_Order_By>>;
  where?: Maybe<Streets_Bool_Exp>;
};


export type Query_RootStreets_By_PkArgs = {
  street_id: Scalars['Int'];
};

/** columns and relationships of "simple_line_type" */
export type Simple_Line_Type = {
  __typename?: 'simple_line_type';
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "simple_line_type" */
export type Simple_Line_Type_Aggregate = {
  __typename?: 'simple_line_type_aggregate';
  aggregate?: Maybe<Simple_Line_Type_Aggregate_Fields>;
  nodes: Array<Simple_Line_Type>;
};

/** aggregate fields of "simple_line_type" */
export type Simple_Line_Type_Aggregate_Fields = {
  __typename?: 'simple_line_type_aggregate_fields';
  avg?: Maybe<Simple_Line_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Simple_Line_Type_Max_Fields>;
  min?: Maybe<Simple_Line_Type_Min_Fields>;
  stddev?: Maybe<Simple_Line_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Simple_Line_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Simple_Line_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Simple_Line_Type_Sum_Fields>;
  var_pop?: Maybe<Simple_Line_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Simple_Line_Type_Var_Samp_Fields>;
  variance?: Maybe<Simple_Line_Type_Variance_Fields>;
};


/** aggregate fields of "simple_line_type" */
export type Simple_Line_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Simple_Line_Type_Avg_Fields = {
  __typename?: 'simple_line_type_avg_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "simple_line_type". All fields are combined with a logical 'AND'. */
export type Simple_Line_Type_Bool_Exp = {
  _and?: Maybe<Array<Simple_Line_Type_Bool_Exp>>;
  _not?: Maybe<Simple_Line_Type_Bool_Exp>;
  _or?: Maybe<Array<Simple_Line_Type_Bool_Exp>>;
  line_id?: Maybe<Int_Comparison_Exp>;
  street_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "simple_line_type" */
export type Simple_Line_Type_Inc_Input = {
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "simple_line_type" */
export type Simple_Line_Type_Insert_Input = {
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Simple_Line_Type_Max_Fields = {
  __typename?: 'simple_line_type_max_fields';
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Simple_Line_Type_Min_Fields = {
  __typename?: 'simple_line_type_min_fields';
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "simple_line_type" */
export type Simple_Line_Type_Mutation_Response = {
  __typename?: 'simple_line_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Simple_Line_Type>;
};

/** Ordering options when selecting data from "simple_line_type". */
export type Simple_Line_Type_Order_By = {
  line_id?: Maybe<Order_By>;
  street_id?: Maybe<Order_By>;
};

/** select columns of table "simple_line_type" */
export enum Simple_Line_Type_Select_Column {
  /** column name */
  LineId = 'line_id',
  /** column name */
  StreetId = 'street_id'
}

/** input type for updating data in table "simple_line_type" */
export type Simple_Line_Type_Set_Input = {
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Simple_Line_Type_Stddev_Fields = {
  __typename?: 'simple_line_type_stddev_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Simple_Line_Type_Stddev_Pop_Fields = {
  __typename?: 'simple_line_type_stddev_pop_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Simple_Line_Type_Stddev_Samp_Fields = {
  __typename?: 'simple_line_type_stddev_samp_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Simple_Line_Type_Sum_Fields = {
  __typename?: 'simple_line_type_sum_fields';
  line_id?: Maybe<Scalars['Int']>;
  street_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Simple_Line_Type_Var_Pop_Fields = {
  __typename?: 'simple_line_type_var_pop_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Simple_Line_Type_Var_Samp_Fields = {
  __typename?: 'simple_line_type_var_samp_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Simple_Line_Type_Variance_Fields = {
  __typename?: 'simple_line_type_variance_fields';
  line_id?: Maybe<Scalars['Float']>;
  street_id?: Maybe<Scalars['Float']>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

/** columns and relationships of "streets" */
export type Streets = {
  __typename?: 'streets';
  last_update?: Maybe<Scalars['timestamptz']>;
  line: Scalars['geometry'];
  street_base_name: Scalars['String'];
  street_id: Scalars['Int'];
  street_name: Scalars['String'];
  street_sufix?: Maybe<Scalars['String']>;
  street_type: Scalars['Int'];
};

/** aggregated selection of "streets" */
export type Streets_Aggregate = {
  __typename?: 'streets_aggregate';
  aggregate?: Maybe<Streets_Aggregate_Fields>;
  nodes: Array<Streets>;
};

/** aggregate fields of "streets" */
export type Streets_Aggregate_Fields = {
  __typename?: 'streets_aggregate_fields';
  avg?: Maybe<Streets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Streets_Max_Fields>;
  min?: Maybe<Streets_Min_Fields>;
  stddev?: Maybe<Streets_Stddev_Fields>;
  stddev_pop?: Maybe<Streets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Streets_Stddev_Samp_Fields>;
  sum?: Maybe<Streets_Sum_Fields>;
  var_pop?: Maybe<Streets_Var_Pop_Fields>;
  var_samp?: Maybe<Streets_Var_Samp_Fields>;
  variance?: Maybe<Streets_Variance_Fields>;
};


/** aggregate fields of "streets" */
export type Streets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Streets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Streets_Avg_Fields = {
  __typename?: 'streets_avg_fields';
  street_id?: Maybe<Scalars['Float']>;
  street_type?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "streets". All fields are combined with a logical 'AND'. */
export type Streets_Bool_Exp = {
  _and?: Maybe<Array<Streets_Bool_Exp>>;
  _not?: Maybe<Streets_Bool_Exp>;
  _or?: Maybe<Array<Streets_Bool_Exp>>;
  last_update?: Maybe<Timestamptz_Comparison_Exp>;
  line?: Maybe<Geometry_Comparison_Exp>;
  street_base_name?: Maybe<String_Comparison_Exp>;
  street_id?: Maybe<Int_Comparison_Exp>;
  street_name?: Maybe<String_Comparison_Exp>;
  street_sufix?: Maybe<String_Comparison_Exp>;
  street_type?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "streets" */
export enum Streets_Constraint {
  /** unique or primary key constraint */
  StreetsPkey = 'streets_pkey'
}

/** input type for incrementing numeric columns in table "streets" */
export type Streets_Inc_Input = {
  street_id?: Maybe<Scalars['Int']>;
  street_type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "streets" */
export type Streets_Insert_Input = {
  last_update?: Maybe<Scalars['timestamptz']>;
  line?: Maybe<Scalars['geometry']>;
  street_base_name?: Maybe<Scalars['String']>;
  street_id?: Maybe<Scalars['Int']>;
  street_name?: Maybe<Scalars['String']>;
  street_sufix?: Maybe<Scalars['String']>;
  street_type?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Streets_Max_Fields = {
  __typename?: 'streets_max_fields';
  last_update?: Maybe<Scalars['timestamptz']>;
  street_base_name?: Maybe<Scalars['String']>;
  street_id?: Maybe<Scalars['Int']>;
  street_name?: Maybe<Scalars['String']>;
  street_sufix?: Maybe<Scalars['String']>;
  street_type?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Streets_Min_Fields = {
  __typename?: 'streets_min_fields';
  last_update?: Maybe<Scalars['timestamptz']>;
  street_base_name?: Maybe<Scalars['String']>;
  street_id?: Maybe<Scalars['Int']>;
  street_name?: Maybe<Scalars['String']>;
  street_sufix?: Maybe<Scalars['String']>;
  street_type?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "streets" */
export type Streets_Mutation_Response = {
  __typename?: 'streets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Streets>;
};

/** on conflict condition type for table "streets" */
export type Streets_On_Conflict = {
  constraint: Streets_Constraint;
  update_columns?: Array<Streets_Update_Column>;
  where?: Maybe<Streets_Bool_Exp>;
};

/** Ordering options when selecting data from "streets". */
export type Streets_Order_By = {
  last_update?: Maybe<Order_By>;
  line?: Maybe<Order_By>;
  street_base_name?: Maybe<Order_By>;
  street_id?: Maybe<Order_By>;
  street_name?: Maybe<Order_By>;
  street_sufix?: Maybe<Order_By>;
  street_type?: Maybe<Order_By>;
};

/** primary key columns input for table: streets */
export type Streets_Pk_Columns_Input = {
  street_id: Scalars['Int'];
};

/** select columns of table "streets" */
export enum Streets_Select_Column {
  /** column name */
  LastUpdate = 'last_update',
  /** column name */
  Line = 'line',
  /** column name */
  StreetBaseName = 'street_base_name',
  /** column name */
  StreetId = 'street_id',
  /** column name */
  StreetName = 'street_name',
  /** column name */
  StreetSufix = 'street_sufix',
  /** column name */
  StreetType = 'street_type'
}

/** input type for updating data in table "streets" */
export type Streets_Set_Input = {
  last_update?: Maybe<Scalars['timestamptz']>;
  line?: Maybe<Scalars['geometry']>;
  street_base_name?: Maybe<Scalars['String']>;
  street_id?: Maybe<Scalars['Int']>;
  street_name?: Maybe<Scalars['String']>;
  street_sufix?: Maybe<Scalars['String']>;
  street_type?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Streets_Stddev_Fields = {
  __typename?: 'streets_stddev_fields';
  street_id?: Maybe<Scalars['Float']>;
  street_type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Streets_Stddev_Pop_Fields = {
  __typename?: 'streets_stddev_pop_fields';
  street_id?: Maybe<Scalars['Float']>;
  street_type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Streets_Stddev_Samp_Fields = {
  __typename?: 'streets_stddev_samp_fields';
  street_id?: Maybe<Scalars['Float']>;
  street_type?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Streets_Sum_Fields = {
  __typename?: 'streets_sum_fields';
  street_id?: Maybe<Scalars['Int']>;
  street_type?: Maybe<Scalars['Int']>;
};

/** update columns of table "streets" */
export enum Streets_Update_Column {
  /** column name */
  LastUpdate = 'last_update',
  /** column name */
  Line = 'line',
  /** column name */
  StreetBaseName = 'street_base_name',
  /** column name */
  StreetId = 'street_id',
  /** column name */
  StreetName = 'street_name',
  /** column name */
  StreetSufix = 'street_sufix',
  /** column name */
  StreetType = 'street_type'
}

/** aggregate var_pop on columns */
export type Streets_Var_Pop_Fields = {
  __typename?: 'streets_var_pop_fields';
  street_id?: Maybe<Scalars['Float']>;
  street_type?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Streets_Var_Samp_Fields = {
  __typename?: 'streets_var_samp_fields';
  street_id?: Maybe<Scalars['Float']>;
  street_type?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Streets_Variance_Fields = {
  __typename?: 'streets_variance_fields';
  street_id?: Maybe<Scalars['Float']>;
  street_type?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin_levels" */
  admin_levels: Array<Admin_Levels>;
  /** fetch aggregated fields from the table: "admin_levels" */
  admin_levels_aggregate: Admin_Levels_Aggregate;
  /** fetch data from the table: "comparativo_type" */
  comparativo_type: Array<Comparativo_Type>;
  /** fetch aggregated fields from the table: "comparativo_type" */
  comparativo_type_aggregate: Comparativo_Type_Aggregate;
  /** fetch data from the table: "evolutivo_type" */
  evolutivo_type: Array<Evolutivo_Type>;
  /** fetch aggregated fields from the table: "evolutivo_type" */
  evolutivo_type_aggregate: Evolutivo_Type_Aggregate;
  /** execute function "get_comparativo" which returns "comparativo_type" */
  get_comparativo: Array<Comparativo_Type>;
  /** execute function "get_comparativo" and query aggregates on result of table type "comparativo_type" */
  get_comparativo_aggregate: Comparativo_Type_Aggregate;
  /** execute function "get_evolutivo" which returns "evolutivo_type" */
  get_evolutivo: Array<Evolutivo_Type>;
  /** execute function "get_evolutivo" and query aggregates on result of table type "evolutivo_type" */
  get_evolutivo_aggregate: Evolutivo_Type_Aggregate;
  /** execute function "get_jams_lines" which returns "jams_agg_line" */
  get_jams_lines: Array<Jams_Agg_Line>;
  /** execute function "get_jams_lines" and query aggregates on result of table type "jams_agg_line" */
  get_jams_lines_aggregate: Jams_Agg_Line_Aggregate;
  /** execute function "get_lines" which returns "simple_line_type" */
  get_lines: Array<Simple_Line_Type>;
  /** execute function "get_lines" and query aggregates on result of table type "simple_line_type" */
  get_lines_aggregate: Simple_Line_Type_Aggregate;
  /** execute function "get_predictivo" which returns "evolutivo_type" */
  get_predictivo: Array<Evolutivo_Type>;
  /** execute function "get_predictivo" and query aggregates on result of table type "evolutivo_type" */
  get_predictivo_aggregate: Evolutivo_Type_Aggregate;
  /** execute function "get_summary" which returns "evolutivo_type" */
  get_summary: Array<Evolutivo_Type>;
  /** execute function "get_summary" and query aggregates on result of table type "evolutivo_type" */
  get_summary_aggregate: Evolutivo_Type_Aggregate;
  /** fetch data from the table: "histogram_type" */
  histogram_type: Array<Histogram_Type>;
  /** fetch aggregated fields from the table: "histogram_type" */
  histogram_type_aggregate: Histogram_Type_Aggregate;
  /** fetch data from the table: "jam_lines" */
  jam_lines: Array<Jam_Lines>;
  /** fetch aggregated fields from the table: "jam_lines" */
  jam_lines_aggregate: Jam_Lines_Aggregate;
  /** fetch data from the table: "jam_lines" using primary key columns */
  jam_lines_by_pk?: Maybe<Jam_Lines>;
  /** fetch data from the table: "jams" */
  jams: Array<Jams>;
  /** fetch data from the table: "jams_agg_line" */
  jams_agg_line: Array<Jams_Agg_Line>;
  /** fetch aggregated fields from the table: "jams_agg_line" */
  jams_agg_line_aggregate: Jams_Agg_Line_Aggregate;
  /** fetch aggregated fields from the table: "jams" */
  jams_aggregate: Jams_Aggregate;
  /** fetch data from the table: "jams" using primary key columns */
  jams_by_pk?: Maybe<Jams>;
  /** fetch data from the table: "simple_line_type" */
  simple_line_type: Array<Simple_Line_Type>;
  /** fetch aggregated fields from the table: "simple_line_type" */
  simple_line_type_aggregate: Simple_Line_Type_Aggregate;
  /** fetch data from the table: "streets" */
  streets: Array<Streets>;
  /** fetch aggregated fields from the table: "streets" */
  streets_aggregate: Streets_Aggregate;
  /** fetch data from the table: "streets" using primary key columns */
  streets_by_pk?: Maybe<Streets>;
};


export type Subscription_RootAdmin_LevelsArgs = {
  distinct_on?: Maybe<Array<Admin_Levels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admin_Levels_Order_By>>;
  where?: Maybe<Admin_Levels_Bool_Exp>;
};


export type Subscription_RootAdmin_Levels_AggregateArgs = {
  distinct_on?: Maybe<Array<Admin_Levels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admin_Levels_Order_By>>;
  where?: Maybe<Admin_Levels_Bool_Exp>;
};


export type Subscription_RootComparativo_TypeArgs = {
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Subscription_RootComparativo_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Subscription_RootEvolutivo_TypeArgs = {
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootEvolutivo_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootGet_ComparativoArgs = {
  args: Get_Comparativo_Args;
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Subscription_RootGet_Comparativo_AggregateArgs = {
  args: Get_Comparativo_Args;
  distinct_on?: Maybe<Array<Comparativo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comparativo_Type_Order_By>>;
  where?: Maybe<Comparativo_Type_Bool_Exp>;
};


export type Subscription_RootGet_EvolutivoArgs = {
  args: Get_Evolutivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootGet_Evolutivo_AggregateArgs = {
  args: Get_Evolutivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootGet_Jams_LinesArgs = {
  args: Get_Jams_Lines_Args;
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Subscription_RootGet_Jams_Lines_AggregateArgs = {
  args: Get_Jams_Lines_Args;
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Subscription_RootGet_LinesArgs = {
  args: Get_Lines_Args;
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Subscription_RootGet_Lines_AggregateArgs = {
  args: Get_Lines_Args;
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Subscription_RootGet_PredictivoArgs = {
  args: Get_Predictivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootGet_Predictivo_AggregateArgs = {
  args: Get_Predictivo_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootGet_SummaryArgs = {
  args: Get_Summary_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootGet_Summary_AggregateArgs = {
  args: Get_Summary_Args;
  distinct_on?: Maybe<Array<Evolutivo_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evolutivo_Type_Order_By>>;
  where?: Maybe<Evolutivo_Type_Bool_Exp>;
};


export type Subscription_RootHistogram_TypeArgs = {
  distinct_on?: Maybe<Array<Histogram_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Histogram_Type_Order_By>>;
  where?: Maybe<Histogram_Type_Bool_Exp>;
};


export type Subscription_RootHistogram_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Histogram_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Histogram_Type_Order_By>>;
  where?: Maybe<Histogram_Type_Bool_Exp>;
};


export type Subscription_RootJam_LinesArgs = {
  distinct_on?: Maybe<Array<Jam_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jam_Lines_Order_By>>;
  where?: Maybe<Jam_Lines_Bool_Exp>;
};


export type Subscription_RootJam_Lines_AggregateArgs = {
  distinct_on?: Maybe<Array<Jam_Lines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jam_Lines_Order_By>>;
  where?: Maybe<Jam_Lines_Bool_Exp>;
};


export type Subscription_RootJam_Lines_By_PkArgs = {
  line_id: Scalars['Int'];
};


export type Subscription_RootJamsArgs = {
  distinct_on?: Maybe<Array<Jams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Order_By>>;
  where?: Maybe<Jams_Bool_Exp>;
};


export type Subscription_RootJams_Agg_LineArgs = {
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Subscription_RootJams_Agg_Line_AggregateArgs = {
  distinct_on?: Maybe<Array<Jams_Agg_Line_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Agg_Line_Order_By>>;
  where?: Maybe<Jams_Agg_Line_Bool_Exp>;
};


export type Subscription_RootJams_AggregateArgs = {
  distinct_on?: Maybe<Array<Jams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jams_Order_By>>;
  where?: Maybe<Jams_Bool_Exp>;
};


export type Subscription_RootJams_By_PkArgs = {
  uuid: Scalars['Int'];
};


export type Subscription_RootSimple_Line_TypeArgs = {
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Subscription_RootSimple_Line_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Simple_Line_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Line_Type_Order_By>>;
  where?: Maybe<Simple_Line_Type_Bool_Exp>;
};


export type Subscription_RootStreetsArgs = {
  distinct_on?: Maybe<Array<Streets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streets_Order_By>>;
  where?: Maybe<Streets_Bool_Exp>;
};


export type Subscription_RootStreets_AggregateArgs = {
  distinct_on?: Maybe<Array<Streets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streets_Order_By>>;
  where?: Maybe<Streets_Bool_Exp>;
};


export type Subscription_RootStreets_By_PkArgs = {
  street_id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type LinesQueryVariables = Exact<{ [key: string]: never; }>;


export type LinesQuery = { __typename?: 'query_root', jam_lines: Array<{ __typename?: 'jam_lines', street_id: number, line_id: number, line?: any | null | undefined }> };

export type StreetsQueryVariables = Exact<{ [key: string]: never; }>;


export type StreetsQuery = { __typename?: 'query_root', streets: Array<{ __typename?: 'streets', street_id: number, street_type: number, street_name: string, street_sufix?: string | null | undefined, line: any }> };

export type Admin_LevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type Admin_LevelsQuery = { __typename?: 'query_root', admin_levels: Array<{ __typename?: 'admin_levels', greater_admin_level_id: number, greater_admin_level_name: string, lower_admin_level_id: number, lower_admin_level_name: string, lines_ids: string, streets_ids: string, shape: any, last_update?: any | null | undefined }> };

export type JamsQueryVariables = Exact<{
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  aggFunc?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
}>;


export type JamsQuery = { __typename?: 'query_root', get_jams_lines: Array<{ __typename?: 'jams_agg_line', line_id: number, level: number }> };

export type EvolutivoQueryVariables = Exact<{
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  metric?: Maybe<Scalars['String']>;
  aggFunc?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
}>;


export type EvolutivoQuery = { __typename?: 'query_root', get_evolutivo: Array<{ __typename?: 'evolutivo_type', index: string, val: number }> };

export type ComparativoQueryVariables = Exact<{
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  metric?: Maybe<Scalars['String']>;
  aggFunc?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
}>;


export type ComparativoQuery = { __typename?: 'query_root', get_comparativo: Array<{ __typename?: 'comparativo_type', year: number, month: number, val: number }> };

export type SummaryQueryVariables = Exact<{
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  aggFunc?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
}>;


export type SummaryQuery = { __typename?: 'query_root', get_summary: Array<{ __typename?: 'evolutivo_type', index: string, val: number }> };

export type PredictivoQueryVariables = Exact<{
  date_from?: Maybe<Scalars['timestamp']>;
  date_to?: Maybe<Scalars['timestamp']>;
  hours?: Maybe<Scalars['_int4']>;
  lines?: Maybe<Scalars['_int4']>;
  metric?: Maybe<Scalars['String']>;
  aggFunc?: Maybe<Scalars['String']>;
  working_days?: Maybe<Scalars['_int4']>;
}>;


export type PredictivoQuery = { __typename?: 'query_root', get_predictivo: Array<{ __typename?: 'evolutivo_type', index: string, val: number }> };

export const LinesDocument = gql`
    query lines {
  jam_lines {
    street_id
    line_id
    line
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LinesGQL extends Apollo.Query<LinesQuery, LinesQueryVariables> {
    document = LinesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StreetsDocument = gql`
    query streets {
  streets {
    street_id
    street_type
    street_name
    street_sufix
    line
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StreetsGQL extends Apollo.Query<StreetsQuery, StreetsQueryVariables> {
    document = StreetsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Admin_LevelsDocument = gql`
    query admin_levels {
  admin_levels {
    greater_admin_level_id
    greater_admin_level_name
    lower_admin_level_id
    lower_admin_level_name
    lines_ids
    streets_ids
    shape
    last_update
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Admin_LevelsGQL extends Apollo.Query<Admin_LevelsQuery, Admin_LevelsQueryVariables> {
    document = Admin_LevelsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JamsDocument = gql`
    query jams($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $aggFunc: String, $working_days: _int4) {
  get_jams_lines(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, agg_func: $aggFunc, working_days: $working_days}
  ) {
    line_id
    level
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JamsGQL extends Apollo.Query<JamsQuery, JamsQueryVariables> {
    document = JamsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EvolutivoDocument = gql`
    query evolutivo($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $metric: String, $aggFunc: String, $working_days: _int4) {
  get_evolutivo(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, metric: $metric, agg_func: $aggFunc, working_days: $working_days}
  ) {
    index
    val
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EvolutivoGQL extends Apollo.Query<EvolutivoQuery, EvolutivoQueryVariables> {
    document = EvolutivoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ComparativoDocument = gql`
    query comparativo($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $metric: String, $aggFunc: String, $working_days: _int4) {
  get_comparativo(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, metric: $metric, agg_func: $aggFunc, working_days: $working_days}
  ) {
    year
    month
    val
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ComparativoGQL extends Apollo.Query<ComparativoQuery, ComparativoQueryVariables> {
    document = ComparativoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SummaryDocument = gql`
    query summary($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $aggFunc: String, $working_days: _int4) {
  get_summary(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, agg_func: $aggFunc, working_days: $working_days}
  ) {
    index
    val
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SummaryGQL extends Apollo.Query<SummaryQuery, SummaryQueryVariables> {
    document = SummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PredictivoDocument = gql`
    query predictivo($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $metric: String, $aggFunc: String, $working_days: _int4) {
  get_predictivo(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, metric: $metric, agg_func: $aggFunc, working_days: $working_days}
  ) {
    index
    val
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PredictivoGQL extends Apollo.Query<PredictivoQuery, PredictivoQueryVariables> {
    document = PredictivoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }