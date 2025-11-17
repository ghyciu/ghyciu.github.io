interface WebVitalsMetric {
  name: string;
  value: number;
  delta?: number;
  id?: string;
  label?: string;
}

interface OnPerfEntry {
  (metric: WebVitalsMetric): void;
}

interface WebVitalsMethods {
  getCLS: (cb: OnPerfEntry) => void;
  getFID: (cb: OnPerfEntry) => void;
  getFCP: (cb: OnPerfEntry) => void;
  getLCP: (cb: OnPerfEntry) => void;
  getTTFB: (cb: OnPerfEntry) => void;
}

const reportWebVitals = (onPerfEntry?: OnPerfEntry): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }: WebVitalsMethods) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
