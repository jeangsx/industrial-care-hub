import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactModalProps {
  trigger: ReactNode;
  title?: string;
}

const ContactModal = ({ trigger, title = "Solicitar servicio" }: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const contactText = `Hola, me interesa solicitar una venta o visita técnica.%0A%0ANombre: ${nombre}%0AEmpresa: ${empresa}%0ATeléfono: ${telefono}%0AEmail: ${email}%0A%0A${mensaje}`;
  const emailBody = `Hola,%0A%0ANombre: ${nombre}%0AEmpresa: ${empresa}%0ATeléfono: ${telefono}%0AEmail: ${email}%0A%0A${mensaje}`;

  const openWhatsApp = () => {
    window.open(`https://wa.me/51938154638?text=${encodeURIComponent(contactText)}`, "_blank");
    setOpen(false);
  };

  const openEmail = () => {
    window.location.href = `mailto:ericksoria@calderas-ecc.com?subject=${encodeURIComponent("Solicitud de venta / visita técnica")}&body=${encodeURIComponent(emailBody)}`;
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-left">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-2">
            Envía tu consulta directo a <span className="font-semibold">+51 938 154 638</span> o a <span className="font-semibold">ericksoria@calderas-ecc.com</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="modal-nombre" className="text-xs">
              Nombre
            </Label>
            <Input
              id="modal-nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              placeholder="Tu nombre"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-empresa" className="text-xs">
              Empresa
            </Label>
            <Input
              id="modal-empresa"
              value={empresa}
              onChange={(event) => setEmpresa(event.target.value)}
              placeholder="Nombre de empresa"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-telefono" className="text-xs">
              Teléfono
            </Label>
            <Input
              id="modal-telefono"
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
              placeholder="+51 938 154 638"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-email" className="text-xs">
              Email
            </Label>
            <Input
              id="modal-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="correo@empresa.com"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-mensaje" className="text-xs">
              Mensaje
            </Label>
            <textarea
              id="modal-mensaje"
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              className="w-full min-h-[112px] rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              placeholder="Describe tu solicitud o nos cuentas qué necesitas"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button variant="hero" className="flex-1" type="button" onClick={openWhatsApp}>
            Enviar WhatsApp
          </Button>
          <Button variant="outline" className="flex-1" type="button" onClick={openEmail}>
            Enviar correo
          </Button>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          También puedes copiar el número o el correo y escribir directamente en tu aplicación preferida.
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="secondary" size="sm" type="button">
              Cerrar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
