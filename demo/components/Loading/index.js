import ReactLoading from 'react-loading';

const Loading = ({style}) => (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: 240, ...style}}>
        <ReactLoading type="bubbles" width={120} height={120} color="#007cd2" />
    </div>
);

Loading.defaultProps = {
    style: {},
};

export default Loading;
