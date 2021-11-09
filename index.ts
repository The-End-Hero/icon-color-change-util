interface iconColorChangeUtilProps {
  iconUrl: string;
  newColor: string;
  type: 'data-png' | string;
  callback?: (data: ImageData | string) => void;
  width?: number;
  height?: number;
}
const iconColorChangeUtil = (props: iconColorChangeUtilProps) => {
  return new Promise((resolve, reject) => {
    const { iconUrl, newColor, width, height } = props;
    let { type, callback } = props;
    if (!callback && typeof type == 'function') {
      callback = type;
      type = 'image-data';
    }
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    getContext();
    const iconElement = document.createElement('img');
    iconElement.addEventListener('load', imageReady);
    iconElement.addEventListener('error', () => {
      reject('error');
    });
    if (width) iconElement.width = width;
    if (height) iconElement.height = height;
    iconElement.src = iconUrl;

    function getCanvas() {
      if (!canvas) {
        canvas = document.createElement('canvas'); // shared instance
        context = canvas.getContext('2d');
      }
    }

    function getContext() {
      if (!context) {
        getCanvas();
      }
    }

    function desaturate() {
      if (!context) return;
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height),
        pixels = imageData.data;
      let i, l, r, g, b, a, average;

      for (i = 0, l = pixels?.length; i < l; i += 4) {
        a = pixels[i + 3];
        if (a === 0) {
          continue;
        } // skip if pixel is transparent

        r = pixels[i];
        g = pixels[i + 1];
        b = pixels[i + 2];

        average = ((r + g + b) / 3) >>> 0; // quick floor
        pixels[i] = pixels[i + 1] = pixels[i + 2] = average;
      }

      context.putImageData(imageData, 0, 0);
    }

    function colorize(color: string, alpha: number) {
      if (!context) return;
      context.globalCompositeOperation = 'source-atop';
      context.globalAlpha = alpha;
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);
      // reset
      context.globalCompositeOperation = 'source-over';
      context.globalAlpha = 1.0;
    }

    function changeColor(color: string, alpha: number) {
      getContext();
      context?.clearRect(0, 0, canvas.width, canvas.height);
      context?.drawImage(iconElement, 0, 0, canvas.width, canvas.height);
      desaturate();
      colorize(color, alpha);
    }

    function imageReady() {
      canvas.width = iconElement.width;
      canvas.height = iconElement.height;
      changeColor(newColor, 1);
      let result: string | ImageData;
      if (type === 'data-png') {
        const dataURL: string = canvas.toDataURL('image/png', 1);
        callback?.(dataURL);
        result = dataURL;
      } /* if (type == 'image-data') */ else {
        const imageData: ImageData = context?.getImageData(0, 0, canvas.width, canvas.height);
        callback?.(imageData);
        result = imageData;
      }
      resolve(result);
      iconElement.remove();
    }
  });
};

export { iconColorChangeUtil };
export default iconColorChangeUtil;
