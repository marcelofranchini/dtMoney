import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import {
  Container,
  TransactionTypeContainer,
  RadioBox,
} from "../NewTransactionModal/styles";
import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

Modal.setAppElement("#root");

interface NewTransictionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransictionModal({
  isOpen,
  onRequestClose,
}: NewTransictionModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      type,
      title,
      category,
      amount: value,
    });
    setType("deposit");
    setTitle("");
    setCategory("");
    setValue(0);

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          placeholder="Valor"
          type="number"
          onChange={(e) => setValue(Number(e.target.value))}
          value={value}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
