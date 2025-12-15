import UIKit

@objc(CatNativeImageViewManager)
class CatNativeImageViewManager: RCTViewManager {
  
  override func view() -> UIView! {
    return CatNativeImageView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override class func moduleName() -> String! {
    return "CatNativeImageView"
  }
}

class CatNativeImageView: UIView {
  
  private var imageView: UIImageView!
  private var scrollView: UIScrollView!
  
  @objc var source: NSDictionary? {
    didSet {
      loadImage()
    }
  }
  
  @objc var resizeMode: NSString? {
    didSet {
      updateContentMode()
    }
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupView()
  }
  
  private func setupView() {
    // Setup ScrollView for pinch-to-zoom
    scrollView = UIScrollView(frame: bounds)
    scrollView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    scrollView.delegate = self
    scrollView.minimumZoomScale = 1.0
    scrollView.maximumZoomScale = 4.0
    scrollView.showsVerticalScrollIndicator = false
    scrollView.showsHorizontalScrollIndicator = false
    scrollView.contentInsetAdjustmentBehavior = .never
    addSubview(scrollView)
    
    // Setup ImageView
    imageView = UIImageView(frame: bounds)
    imageView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    imageView.contentMode = .scaleAspectFill
    imageView.clipsToBounds = true
    imageView.backgroundColor = UIColor(red: 0.88, green: 0.88, blue: 0.88, alpha: 1.0)
    scrollView.addSubview(imageView)
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    scrollView.frame = bounds
    imageView.frame = bounds
    scrollView.contentSize = bounds.size
  }
  
  private func loadImage() {
    guard let source = source,
          let uri = source["uri"] as? String,
          let url = URL(string: uri) else {
      return
    }
    
    // Load image asynchronously
    URLSession.shared.dataTask(with: url) { [weak self] data, response, error in
      guard let self = self,
            let data = data,
            let image = UIImage(data: data) else {
        return
      }
      
      DispatchQueue.main.async {
        self.imageView.image = image
      }
    }.resume()
  }
  
  private func updateContentMode() {
    guard let resizeMode = resizeMode as? String else { return }
    
    switch resizeMode {
    case "cover":
      imageView.contentMode = .scaleAspectFill
    case "contain":
      imageView.contentMode = .scaleAspectFit
    case "stretch":
      imageView.contentMode = .scaleToFill
    default:
      imageView.contentMode = .scaleAspectFill
    }
  }
}

// MARK: - UIScrollViewDelegate
extension CatNativeImageView: UIScrollViewDelegate {
  func viewForZooming(in scrollView: UIScrollView) -> UIView? {
    return imageView
  }
  
  func scrollViewDidZoom(_ scrollView: UIScrollView) {
    // Center the image when zoomed
    let offsetX = max((scrollView.bounds.width - scrollView.contentSize.width) * 0.5, 0)
    let offsetY = max((scrollView.bounds.height - scrollView.contentSize.height) * 0.5, 0)
    imageView.center = CGPoint(x: scrollView.contentSize.width * 0.5 + offsetX,
                               y: scrollView.contentSize.height * 0.5 + offsetY)
  }
}
