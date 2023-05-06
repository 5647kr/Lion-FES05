class ShoppingEvent {
  constructor() {
    // 좌측 아이템 리스트
    const shop = document.querySelector("#shopping-container");
    this.itemList = shop.querySelector(".item-shopping");

    // 우측상단 소지금
    const money = document.querySelector("#purchase-wrap");
    this.myMoney = money.querySelector(".my-money p");

    // 우측중앙 주문목록의 주문내역과 주문버튼
    const order = document.querySelector("#shopping-list");
    this.orderedList = order.querySelector("ul");
    this.orderedBtn = order.querySelector(".ordered-btn");

    // 주문목록의 아이템안에 있는 아이템 증가 감소버튼과 주문취소버튼
    const orderedItem = document.querySelector(".shopped-list");
    this.itemUp = orderedItem.querySelector(".list-count-ctrl .count-up")
    this.itemDwn = orderedItem.querySelector(".list-count-ctrl .count-down")
    this.itemCan = orderedItem.querySelector(".cancel-btn");

    // 우측하단 주머니의 주머니목록과 일괄매각버튼
    const pocket = document.querySelector("#pocket-list");
    this.pocketList = pocket.querySelector("ul");
    this.allsel = pocket.querySelector(".all-sel");

    // 우측하단 주머니 아이템 매각버튼
    const pocketItem = document.querySelector(".pocket-item-list");
    

  }
  bindEvent() {
  /**
   * 1. 일괄매각을 누르면 주머니안에 있는 모든 아이템을 매각한다.
   * 1-1. 주머니안에 있는 리스트를 모두 매각 팝업창에 이동한다
   * 
   * 2. 주머니에 있는 아이템들을 매각한다.
   * 2-1. 아이템 매각버튼을 누르면 팝업창이 뜨고 팝업창에서 1~10개까지 선택하여 매각한다.
   * 2-2. 선택하는 갯수에 따라 매각가가 자동으로 계산된다.
   * 2-3. 매각되면 팝업창은 닫히고 주머니에서는 아이템이 차감되고 소지금이 늘어난다.
   * 매각금 + 소지금 -> 소지금
   * */
    
    const sellPopup = document.querySelector("#sell-wrap");
    this.selBtn = sellPopup.querySelector(".sell-btn");
    
    sellPopup.style.display = "none";
    this.allsel.addEventListener("click", () => {
      // 팝업창 열리는 이벤트
      sellPopup.style.display = "";
    });
    this.selBtn.addEventListener("click", () => {
      // 팝업창 닫는 이벤트
      sellPopup.style.display = "none";
    })
  }
}

export default ShoppingEvent;