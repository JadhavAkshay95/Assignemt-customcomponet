import {
  faCaretDown,
  faCaretUp,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const CustomDropDown = ({
  label,
  placeholder,
  listOptions = [],
  selectedListItem,
  clear,
}) => {
  const [list, setList] = useState(() =>
    listOptions.map((item) => ({ item: item, selected: false }))
  );
  const [show, setShow] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    selectedListItem(selectedList, label);
  }, [selectedList.length, list]);

  useEffect(() => {
    if (clear === "true") {
      setList(
        list.map((item) => {
          item.selected = false;
          return item;
        })
      );
      setShow(false);
    }
  }, [clear]);

  const selectItem = (checked, item, event) => {
    event.stopPropagation();
    setList(
      list.map((element) => {
        if (element.item === item.item) {
          item.selected = checked;
        }
        return element;
      })
    );

    setSelectedList(
      list.map((item1) => {
        if (item1.item === item.item) {
          item.selected = checked;
        }
        return item1;
      })
    );
  };
  return (
    <div className="drop-down-naame">
      <label>{label}</label>
      <div className="item-container" onClick={() => setShow(!show)}>
        {selectedList.length &&
        selectedList.filter((element) => element.selected).length
          ? selectedList.map((item) => {
              return (
                item.selected && (
                  <>
                    <div key={item.item} className="selected-item-container">
                      <div className="selected-items">{item.item}</div>
                      <FontAwesomeIcon
                        className="cross-icon"
                        icon={faTimes}
                        onClick={($event) => selectItem(false, item, $event)}
                      />
                    </div>
                  </>
                )
              );
            })
          : placeholder}
      </div>
      {show ? (
        <FontAwesomeIcon className="icon-data" icon={faCaretDown} />
      ) : (
        <FontAwesomeIcon className="icon-data" icon={faCaretUp} />
      )}
      {show && (
        <div className="dropdown-item">
          {list.map((item) => {
            return (
              <>
                <div key={item.item} className="ytt">
                  <ul>{item.item}</ul>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={($event) =>
                      selectItem($event.target.checked, item, $event)
                    }
                  />
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
