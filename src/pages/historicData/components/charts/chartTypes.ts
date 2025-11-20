import type { Meanings } from "../../types";

export interface LegendEntry {
  key: string;
  pointKey: string;
  name: string;
  shortSN: string;
  fullSN: string;
  unit: string;
  model: string;
  point: string;
  longDescription: string;
  colorIndex: number;
  dtype?: string;
  meanings?: Meanings;
  friendlyMeanings?: Meanings;
  meaningKeys: string[];
  isCategorical: boolean;
}

export interface CategoricalSeriesRow {
  meaningKey: string;
  label: string;
  activeSlots: boolean[];
}

export interface CategoricalChartData {
  id: string;
  title: string;
  subtitle: string;
  timeLabels: string[];
  rows: CategoricalSeriesRow[];
  colorIndex: number;
}

// Color palette for legend entries
export const LEGEND_COLORS = [
  { bg: 'bg-purple-500', border: 'border-purple-600' },
  { bg: 'bg-green-500', border: 'border-green-600' },
  { bg: 'bg-teal-500', border: 'border-teal-600' },
  { bg: 'bg-blue-500', border: 'border-blue-600' },
  { bg: 'bg-pink-500', border: 'border-pink-600' },
  { bg: 'bg-orange-500', border: 'border-orange-600' },
  { bg: 'bg-indigo-500', border: 'border-indigo-600' },
  { bg: 'bg-red-500', border: 'border-red-600' },
];

export const LINE_COLOR_CLASSES = [
  'text-purple-500',
  'text-green-500',
  'text-teal-500',
  'text-blue-500',
  'text-pink-500',
  'text-orange-500',
  'text-indigo-500',
  'text-red-500',
];

// Extended color palette for categorical charts with all shades
export const CATEGORICAL_COLORS = [
  { bg50: 'bg-purple-50', bg100: 'bg-purple-100', border200: 'border-purple-200', border400: 'border-purple-400', bg500: 'bg-purple-500/80', text600: 'text-purple-600', text700: 'text-purple-700', ring: 'focus:ring-purple-500' },
  { bg50: 'bg-green-50', bg100: 'bg-green-100', border200: 'border-green-200', border400: 'border-green-400', bg500: 'bg-green-500/80', text600: 'text-green-600', text700: 'text-green-700', ring: 'focus:ring-green-500' },
  { bg50: 'bg-teal-50', bg100: 'bg-teal-100', border200: 'border-teal-200', border400: 'border-teal-400', bg500: 'bg-teal-500/80', text600: 'text-teal-600', text700: 'text-teal-700', ring: 'focus:ring-teal-500' },
  { bg50: 'bg-blue-50', bg100: 'bg-blue-100', border200: 'border-blue-200', border400: 'border-blue-400', bg500: 'bg-blue-500/80', text600: 'text-blue-600', text700: 'text-blue-700', ring: 'focus:ring-blue-500' },
  { bg50: 'bg-pink-50', bg100: 'bg-pink-100', border200: 'border-pink-200', border400: 'border-pink-400', bg500: 'bg-pink-500/80', text600: 'text-pink-600', text700: 'text-pink-700', ring: 'focus:ring-pink-500' },
  { bg50: 'bg-orange-50', bg100: 'bg-orange-100', border200: 'border-orange-200', border400: 'border-orange-400', bg500: 'bg-orange-500/80', text600: 'text-orange-600', text700: 'text-orange-700', ring: 'focus:ring-orange-500' },
  { bg50: 'bg-indigo-50', bg100: 'bg-indigo-100', border200: 'border-indigo-200', border400: 'border-indigo-400', bg500: 'bg-indigo-500/80', text600: 'text-indigo-600', text700: 'text-indigo-700', ring: 'focus:ring-indigo-500' },
  { bg50: 'bg-red-50', bg100: 'bg-red-100', border200: 'border-red-200', border400: 'border-red-400', bg500: 'bg-red-500/80', text600: 'text-red-600', text700: 'text-red-700', ring: 'focus:ring-red-500' },
];

export const LINE_SERIES_LENGTH = 36;
export const LINE_CHART_VIEWBOX = { width: 1000, height: 360 };
