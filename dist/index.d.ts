interface iconColorChangeUtilProps {
    iconUrl: string;
    newColor: string;
    type: 'data-png' | string;
    callback?: (data: ImageData | string) => void;
    width?: number;
    height?: number;
}
declare const iconColorChangeUtil: (props: iconColorChangeUtilProps) => void;
export { iconColorChangeUtil };
export default iconColorChangeUtil;
