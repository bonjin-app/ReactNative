//
//  CalendarModule.swift
//  DesignExample
//
//  Created by gigas on 2021/07/21.
//

import Foundation
import UIKit

@objc(CalendarModule)
class CalendarModule: NSObject {
  
  @objc
  func calendar(_ name: String) {
    DispatchQueue.main.async { [self] in
      let rootViewController = UIApplication.shared.delegate?.window??.rootViewController
      showAlert(viewController: rootViewController!, style: .alert)
    }
  }
  
  func showAlert(viewController: UIViewController, style: UIAlertController.Style) {
      let alert = UIAlertController(title: "알림", message: "내용", preferredStyle: style)
      let success = UIAlertAction(title: "확인", style: .default) { (action) in
          print("확인")
      }
      
      let cancel = UIAlertAction(title: "취소", style: .cancel, handler: nil)
      let destructive = UIAlertAction(title: "삭제", style: .destructive)
      
      alert.addAction(success)
      alert.addAction(cancel)
      alert.addAction(destructive)
      
      viewController.present(alert, animated: true, completion: nil)
  }
}
