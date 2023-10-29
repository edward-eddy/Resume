import PropTypes from 'prop-types';

export default function SkillItem(props) {
    return (
        <div className="progress col-12 rounded-0 my-2">
            <div className="progress_tag col-2 rounded-end-3 p-2 fw-semibold">{props.tag}: </div>
            <div className="bg-light col-12 m-0 p-0 rounded-start-3">
                <div
                    className="progress_percent rounded-start-3"
                    style={{ width: `${props.percent}%` }}
                >
                    {/* {props.percent}% */}
                </div>
            </div>
        </div>
    );
}

SkillItem.propTypes = {
    percent: PropTypes.number,
    tag: PropTypes.string
}