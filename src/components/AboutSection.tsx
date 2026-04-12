const AboutSection = () => (
  <section id="about" className="py-32 px-6">
    <div className="container mx-auto max-w-3xl">
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">About</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Một tổ hợp sản phẩm, một đội ngũ duy nhất.
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        Vein Innovation là đội ngũ tập trung vào việc tạo ra các sản phẩm D2C — mỗi sản phẩm giải quyết một vấn đề cụ thể của người dùng. 
        Bạn sẽ biết tới Vein thông qua chính những sản phẩm mà chúng tôi xây dựng. 
        Chúng tôi quan sát hành vi thực tế, tìm ra những điểm đau bị bỏ qua, và biến chúng thành giải pháp đơn giản, thiết thực.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Tìm vấn đề thực tế", desc: "Lắng nghe, quan sát, và đào sâu hơn những phản hồi bề mặt." },
          { title: "Hiểu nguyên nhân gốc rễ", desc: "Không chỉ biết cái gì hỏng — mà tại sao nó hỏng và ảnh hưởng ai." },
          { title: "Tạo sản phẩm giải quyết đúng vấn đề", desc: "Mỗi sản phẩm của Vein tồn tại vì một lý do rõ ràng." },
        ].map((item) => (
          <div key={item.title} className="border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
